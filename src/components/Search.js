import React, { useRef, useContext } from 'react';
import WeatherContext from './context/WeatherContext';

const Search = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather, setLoading, loading } = weatherContext;

	const text = useRef('')

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
        <div className="block shadow-md p-4">
			<form onSubmit={onSubmit} className="block">
				<div className="mt-1">
					<div className="flex">
						<input
							type="text"
							name="storeName"
							placeholder="Search Loacation e.g Ghana"
							id="name"
							className="rounded-lg ml-auto h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                            shadow-lg sm:text-sm px-1 border-gray-300 mr-1"
							required
							ref={text}
						/>
					</div>
				</div>
				<button type="submit" 
				className={`${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600'} my-2 w-full antialiased capitalize py-2 bg-blue-600 text-white font-semibold text-xl text-serif`}>
					{
						loading ? 'Please wait...' : 'SEARCH'
					}
				</button>
			</form>
		</div>
    )
}

export default Search
