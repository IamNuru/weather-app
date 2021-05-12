import React, { useContext } from 'react';
import WeatherContext from './context/WeatherContext';

const Temperature = () => {
	const weatherContext = useContext(WeatherContext);
	const { weather } = weatherContext;

    return (
        <div className="temp">{Math.round(weather.main.temp)}°c</div>
    )
}

export default Temperature
