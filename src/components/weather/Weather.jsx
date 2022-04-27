import React,{useState,useEffect} from "react";
import axios from "axios";
import Search from "./Search";
import "./weather.scss";
import WeatherByLocation from "./WeatherByLocation";
//Hook
const Weather = () => {
    const [title, setTitle] = useState("");
    useEffect(async () => {
        let response = await axios({
            method: "post",
            url: "https://test-server-react.herokuapp.com/get-data-by-url/",
            data: { url: "https://www.metaweather.com/api/location/1236594/" }

        });
        // console.log("run effect")
        setTitle(response.data.title);
        setTimeout(() => {
            setTitle(response.data.title)
        },0)
        
    },[])
    // console.log("run render")
    return (
        <div className="weather-app-container">
            <Search />
            <hr />
            <WeatherByLocation
                woeIdFromParent = {"1252431"}
            />
            <hr />
            <WeatherByLocation
                woeIdFromParent = {"1236594"}
            />
        </div>
    )
}


//Class component
// class Weather extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             title:""
//         }
//     }
        
//     async componentDidMount() {
//         // let data = await axios.get("https://www.metaweather.com/api/location/1236594");
//         let response = await axios({
//             method: "post",
//             url: "https://test-server-react.herokuapp.com/get-data-by-url/",
//             data: { url: "https://www.metaweather.com/api/location/1236594/" }

//         });
//         this.setState({
//             title : response.data.title
//         })
//         console.log(response.data);
//     }
//     render(){
//         return(
//             <div> Thời tiết tại {this.state.title} </div>
//         )
//     }
// }
export default Weather;