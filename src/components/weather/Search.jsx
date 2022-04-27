import { useState } from "react";
import axios from "axios";
import _, { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [locationArr, setLocationArr] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isFocusInput, setIsFocusInput] = useState(false);
    let history = useHistory();
    const handleSearchBtn = async () => {
        setIsLoadingData(true)
        setLocationArr([])
        let response = await axios({
            method: "post",
            url: "https://test-server-react.herokuapp.com/get-data-by-url/",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` }

        });
        if (response && response.data) {
            let result = response.data;
            let _locationArr = [];
            if (!_.isEmpty(result)) {
                for (let key in result) {
                    _locationArr.push(result[key])
                }
                setLocationArr(_locationArr)
            } else {
                setLocationArr([])
            }
            
        }
        setIsLoadingData(false);
        setIsFocusInput(false)
    }
    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`);
    }
    return (
        <div className="search-weather-container">
            <div className="search-inputs">
                <input type="text"
                placeholder="Search any city ..."
                value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    onFocus={()=>setIsFocusInput(true)}
            />
            <button onClick={() => handleSearchBtn()}>Search</button>
            </div>
            {
                isLoadingData === true
                && <div style={{ padding: "15px" }}>Loading data...</div>
            }
            <div className="result-container">
                {locationArr && locationArr.length > 0 && locationArr.map((item, index) => {
                return (
                    <div className="result-child" key={`location-${index}`}>
                        <div className="title">Title: {item.title }</div>
                        <div className="type">Type: {item.location_type }</div>
                        <div className="woeid"><span onClick={() => handleViewDetail(item.woeid)} title="Click to view detail">
                            <b>Woeid: {item.woeid}
                            </b>
                        </span>
                        </div>
                        <div className="latt-long">Latt_long: {item.latt_long }</div>
                    </div>
                )
            })}
            </div>
            {
                !isFocusInput && locationArr && locationArr.length === 0 && keyword 
                && <div style={{padding:"15px"}}>
                        Not found data with keyword = {keyword}
                </div>
            }
           
        </div>
    )
}
export default Search;