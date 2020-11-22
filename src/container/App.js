import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import './App.css';
import {getCityWeather} from "../services/cityWeatherAPI";
import {displayCorrectTemperature} from '../helpers/displayCorrectTemperature';
import CityForm from "../components/CityForm/CityForm";
import CityWeatherChart from "../components/CityWeaterChart/CityWeatherChart";
import * as cityWeatherActions from "../actions/cityWeatherActions";
import ErrorField from "../components/ErrorField/ErrorField";

const App = () => {
    const dispatch = useDispatch();
    const [errorField, setErrorField] = useState({
        show: false,
        message: ''
    });

    const showWeather = (city) => {
        setErrorField({
            show: false,
            message: ''
        });

        getCityWeather(city).then((result) => {
            console.log('Result -->', result.data);

            if(result.data.cod === "200") {
                const newTemperatureList = displayCorrectTemperature(result.data.list);

                dispatch(cityWeatherActions.getCityWeather({
                    ...{city: result.data.city.name},
                    ...{temperature: newTemperatureList}
                }));
            } else if (result.data.cod === "404") {
                setErrorField({
                    show: true,
                    message: result.data.message
                });

                dispatch(cityWeatherActions.clearCityWeather());
            }
        });
    };

    return (
        <>
            <div className="container">
                <CityForm handlerSubmit={showWeather}/>
                {
                    errorField.show
                    ? <ErrorField message={errorField.message}/>
                    : <CityWeatherChart />
                }
            </div>
        </>
    );
};

export default App;
