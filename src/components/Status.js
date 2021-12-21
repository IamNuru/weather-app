import React, { useContext } from 'react';
import WeatherContext from './context/WeatherContext';
import cloud from "../assets/clouds.jpg"
import rain from "../assets/rain.jpg"
import humidity from "../assets/humidity.png"
import temperature from "../assets/temperature.jpg"
import wind from "../assets/wind-speed.jpg"

const Status = () => {
	const weatherContext = useContext(WeatherContext);
	const { weather } = weatherContext;

    return (
        <div className="wrap-status">
            {/* <div className="weather">
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
            </p> */}
            <div className="shadow-md md:h-48 bg-white text-gray-800 py-4 px-2 rounded-b-2xl mx-2">
                <div className="block md:flex h-full">
                    <div className="block h-full w-80 mx-auto">
                        <div className="flex justify-between bg-gray-200 p-2 shadow-inner">
                            <div className="p-2 bg-gray-200">
                                <div className="weather-image rounded-md mb-1 h-24 bg-cover flex-1"
                                style={{backgroundImage: weather.weather[0].main === "Rain" ?  `url(${rain})`:`url(${cloud})`}}>
                                </div>
                                <div className="weather-description text-medium font-light capitalize">
                                    {weather.weather[0].description}
                                </div>
                            </div>
                            <div className="">
                                <div className="grid h-full">
                                    <div className="sunrise">
                                        <span className='font-light'>Sunrise:</span>
                                        <span className='font-semibold text-medium'>{ new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}</span>
                                    </div>
                                    <div className="sunset mt-auto pb-4">
                                        <span className='font-light'>Sunset:</span>
                                        <span className='font-semibold text-medium'>{ new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 mt-6 justify-center md:mt-0 md:flex md:flex-1">
                        <div className="humidity block w-72 md:w-48 shadow-2xl p-2">
                            <div className="block">
                                <div className="h-12 w-12 rounded-full p-2 bg-yellow-200 m-auto">
                                    <img src={humidity} className='bg-cover' alt="humidity" />
                                </div>
                                <p className='font-mono p-2'>Humidity(%)</p>
                            </div>
                            <div className="font-semibold text-2xl">{weather ? weather.main.humidity : 0}</div>
                        </div>
                        <div className="humidity block md:w-48 shadow-2xl p-2">
                            <div className="block">
                                <div className="h-12 w-12 rounded-full p-2 bg-red-200 m-auto">
                                    <img src={temperature} className='bg-cover' alt="temperature" />
                                </div>
                                <p className='font-mono p-2'>Temperature(°c)</p>
                            </div>
                            <div className="font-semibold text-2xl">{weather ? weather.main.temp : 0}</div>
                        </div>
                        <div className="humidity block md:w-48 shadow-2xl p-2">
                            <div className="block">
                                <div className="h-12 w-12 rounded-full p-2 bg-gray-200 m-auto">
                                    <img src={wind} className='bg-cover' alt="wind" />
                                </div>
                                <p className='font-mono p-2'>Wind Speed(m/s)</p>
                            </div>
                            <div className="font-semibold text-2xl">{weather ? weather.wind.speed : 0}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Status
