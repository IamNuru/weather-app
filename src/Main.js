import React , { useContext } from 'react';
import Search from './components/Search';
import Info from './components/Info';
import Status from './components/Status';
import Temperature from './components/Temperature';
import WeatherContext from './components/context/WeatherContext';
import cold from './assets/cold-bg.jpg'
import warm from './assets/warm-bg.jpg'
import Loading from './components/Loading'


const Main = () => {
	const weatherContext = useContext(WeatherContext);
	const { weather, error, loading } = weatherContext;
    

    return (
        <> 
             <Search />
            {
                !loading ? error === null ? weather !== null ?
                <div className="min-h-screen bg-cover bg-bottom" 
                style={{backgroundImage: (weather.main.temp > 16) ?  `url(${warm})`:`url(${cold})`}
                }>
                     
                     <div className="wrap-main min-h-screen pb-8">
                        <Info />
                        <Temperature />
                        <Status />
                    </div>
                    
                </div>
                :
                <p className="font-mono text-medium text-white m-4">Search by country or city</p>
                :
                <h2 className="text-red-600 text-xl capitalize italic">{error.message}</h2>
                : <div className="mt-16">
                    <Loading />
                </div>
            }
                    
            
        </>
    )
}

export default Main
