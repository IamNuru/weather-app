import React, {useContext } from 'react';
import WeatherContext from './context/WeatherContext';

const Info = () => {
	const weatherContext = useContext(WeatherContext);
	const { weather } = weatherContext;

    let date = String(new window.Date());
    return (
        <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">
                {
                    date = date.slice(3,15)
                }
            </div>
        </div>
    )
}

export default Info
