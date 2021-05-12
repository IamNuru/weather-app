import React, { useRef, useContext } from 'react';
import WeatherContext from './context/WeatherContext';

const Search = () => {
	const weatherContext = useContext(WeatherContext);
	const { getWeather } = weatherContext;

	const text = useRef('')

	const onSubmit = (e) =>{
		e.preventDefault();
		getWeather(text.current.value);
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
			</form>
		</div>
    )
}

export default Search
