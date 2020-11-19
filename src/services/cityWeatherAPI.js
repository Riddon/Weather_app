import axios from 'axios';
import {cityWeatherURL} from '../constants/constOpenWeatherURL';
import {appId} from "../constants/constOpenWeatherAppID";


export const getCityWeather = async (city) => {
    try {
        return await axios
            .get(`${cityWeatherURL}q=${city}&appid=${appId}`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};
