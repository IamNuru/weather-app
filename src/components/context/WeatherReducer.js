import {
    GET_WEATHER,
    WEATHER_ERROR
} from './types'

const WeatherReducer = (state, action) =>{
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                error:null,
                weather: action.payload
            }
        case WEATHER_ERROR:
            return {
                ...state,
                weather:null,
                error: action.payload,
            }
        default:
        return{
            ...state
        }
    }
}

export default WeatherReducer;