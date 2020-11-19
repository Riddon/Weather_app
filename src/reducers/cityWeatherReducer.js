import * as types from "../constants/constTypes";

const initState = {
    cityWeather: []
};

const cityWeatherReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_CITY_WEATHER:
            return {
                ...state,
                ...{ cityWeather: action.payload }
            };

        case types.CLEAR_CITY_WEATHER:
            return initState;

        default:
            return state;
    }
};

export default cityWeatherReducer;