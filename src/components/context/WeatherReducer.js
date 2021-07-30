import {
    GET_WEATHER,
    SET_LOADING,
    WEATHER_ERROR
} from './types'

const WeatherReducer = (state, action) =>{
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                error:null,
                weather: action.payload,
                loading: false
            }
        case WEATHER_ERROR:
            return {
                ...state,
                weather:null,
                error: action.payload,
                loading: false,
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default:
        return{
            ...state
        }
    }
}

export default WeatherReducer;