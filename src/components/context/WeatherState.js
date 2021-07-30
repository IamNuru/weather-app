import React, {useReducer} from 'react';
import axios from 'axios';
import WeatherReducer from './WeatherReducer';
import WeatherContext from './WeatherContext';
import {
    GET_WEATHER,
    SET_LOADING,
    WEATHER_ERROR
} from './types'


const api = {
    key: "e7d296e3b92bf1be65ceb7e59ae0e4c8",
    base: "https://api.openweathermap.org/data/2.5/"
  }


const WeatherState = (props) => {

    const initialState ={
        weather:null,
        error:null,
        loading: false,
    }

    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    //actions
    const getWeather = async (query) =>{
        try {
            const res = await axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
            console.log(res.data)
            dispatch ({
                type: GET_WEATHER,
                payload: res.data
            })
        } catch (err) {
            dispatch ({
                type: WEATHER_ERROR,
                payload: err.response.data
            })
        }
    }

    const setLoading = val =>{
        dispatch({
            type: SET_LOADING,
            payload: val
        })
    }
    return (
        <WeatherContext.Provider value={{
            weather: state.weather,
            error: state.error,
            loading: state.loading,
            getWeather,
            setLoading,
        }}>
            {props.children}
            
        </WeatherContext.Provider>
    )
}

export default WeatherState
