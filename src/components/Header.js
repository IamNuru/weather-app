import React, { useContext } from 'react'
import Search from './Search'
import WeatherContext from './context/WeatherContext';


const Header = () => {
    const {weather} = useContext(WeatherContext);
    return (
        <div className="block">
             <Search />
            <div className="flex justify-between px-2 py-4">
                <div className="h-time-date">
                    <div className="h-sub-time text-2xl mb-2 font-semibold">{new Date().toLocaleTimeString([],{
                        hour:"2-digit",
                        minute:"2-digit"
                    })}</div>
                    <div className="h-sub-date text-xs font-light">{new Date().toLocaleDateString("en-US",{
                        day:"numeric",
                        month:"long",
                        year:"numeric"
                    })}</div>
                </div>
                <div className="h-city-country">
                    <div className="h-name text-2xl mb-2 font-semibold">{weather ? weather.name : ''}</div>
                    <div className="h-country text-xs font-light">{weather ? weather.sys.country : ''}</div>
                </div>
            </div>
        </div>
    )
}

export default Header
