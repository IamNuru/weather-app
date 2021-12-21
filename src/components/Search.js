import React, { useRef, useContext, useEffect } from 'react';
import WeatherContext from './context/WeatherContext';

const Search = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather, setLoading, loading } = weatherContext;

	const text = useRef('')

	useEffect(() =>{
			setLoading(true)
			getWeather('Ghana');
	},[])

	const onSubmit = (e) =>{
		e.preventDefault();
		if(loading){
			alert('Please wait ... still loading data')
		}else{
			setLoading(true)
			getWeather(text.current.value);
		}
		
	}

    return (
        <div className="block w-full max-w-md ml-auto">
			<form onSubmit={onSubmit} className="block md:flex">
				<div className="mt-1 flex-1">
					<div className="flex">
						<input
							type="text"
							name="storeName"
							placeholder="Search Location e.g Ghana"
							id="name"
							className="rounded-md ml-auto h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                            shadow-lg sm:text-sm px-1 border-gray-300 mr-1"
							required
							ref={text}
						/>
					</div>
				</div>
				<div className="submit-btn w-24 ml-auto">
					<button type="submit" 
					className={`${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600'} rounded-md w-full antialiased capitalize py-1 mt-2 bg-blue-600 text-white font-semibold text-md text-serif`}>
						{
							loading ? 'Wait...' : 'Search'
						}
					</button>
				</div>
			</form>
		</div>
    )
}

export default Search
