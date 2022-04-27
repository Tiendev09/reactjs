import { useParams,useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./child/WeatherState";
import WeatherDay from "./child/WeatherDay";
import _ from "lodash";
import "./weather.scss";
import moment from "moment";
const WeatherByLocation = (props) => {
    let { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState({});
    let history = useHistory();
    useEffect(() => {
        getWeatherByLocation();
    },[])
    const getWeatherByLocation = async () => {
        if (!woeid) {
            woeid = props.woeIdFromParent;
        }
        let response = await axios({
            method: "post",
            url: "https://test-server-react.herokuapp.com/get-data-by-url/",
            data: { url: `https://www.metaweather.com/api/location/${woeid}` }

        });
        if (response && response.data) {
            setLocationWeather(response.data);
        }
    }
    const handleBack = () => {
        history.push("/weather");
    }
    return (
        <div className="w-b-l-container">
            {
                !props.woeIdFromParent &&
                <div className="back">
                <span onClick={()=>handleBack()}>--Back--</span>
                </div>
            }
            
            <div className="list-weather-day">
                {
                    !_.isEmpty(locationWeather) &&
                    locationWeather.consolidated_weather &&
                    locationWeather.consolidated_weather.length > 0
                    && locationWeather.consolidated_weather.map((item, index) => {
                        console.log(index)
                        return (
                            <div key={`weatherDay-${index}`} className={`weather-day-${index}`}>
                                {
                                    index === 0 &&
                                    <div className="location-data">
                                            <div className="title">
                                                {locationWeather.title}
                                            </div>
                                            <div className="time">
                                                {moment(locationWeather.time).format("hh:mm:ss A")}
                                            </div>
                                            
                                    </div>
                                }
                                <WeatherDay
                                dataWeather={item}/>
                            </div>
                            
                        )
                    })
                }
            </div>
            
            
            
        </div>
    )
}
export default WeatherByLocation;