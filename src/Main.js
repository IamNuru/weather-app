import React , { useContext } from 'react';
import Search from './components/Search';
import Info from './components/Info';
import Status from './components/Status';
import Temperature from './components/Temperature';
import WeatherContext from './components/context/WeatherContext';
import cold from './assets/cold-bg.jpg'
import warm from './assets/warm-bg.jpg'


const Main = () => {
	const weatherContext = useContext(WeatherContext);
	const { weather, error } = weatherContext;
    

    return (
        <div> 
             <Search />
            {
                error === null ? weather !== null ?
                <div classsName="h-screen bg-cover bg-bottom" 
                style={{backgroundImage: (weather.main.temp > 16) ?  `url(${warm})`:`url(${cold})`}
                }>
                     
                     <div className="wrap-main h-screen">
                        <Info />
                        <Temperature />
                        <Status />
                    </div>
                    
                </div>
                :
                <h4 className="font-bold antialiased font-serif text-lg px-4 py-2 bg-pink-600 text-white m-4">Search by country or city</h4>
                :
                <h2>{error.message}</h2>
            }
            
        </div>
    )
}

export default Main
