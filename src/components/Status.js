import React, { useContext } from 'react';
import WeatherContext from './context/WeatherContext';

const Status = () => {
	const weatherContext = useContext(WeatherContext);
	const { weather } = weatherContext;

    return (
        <div className="wrap-status">
            <div className="weather">
                {weather.weather[0].description}
            </div>  
            <p className="p-4 bg-white shadow-md m-2 rounded-md">
                Sun rises at {' '}
                <span className="text-md text-bold text-pink-600">
                    { new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                  })}
                </span>
                {' '}and set {' '}
                 <span className="text-md text-bold text-gray-700">{ new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                  })}</span>
            </p>
        </div>
        
    )
}

export default Status
