import React from 'react';
import './App.css';
import {getCityWeather} from "../services/cityWeatherAPI";
import CityForm from "../components/CityForm/CityForm";


const App = () => {

    const showWeather = (city) => {
        getCityWeather(city).then((result) => {
            console.log('Result -->', result)
        });
    };

    return (
        <>
            <div className="container">
                <CityForm handlerSubmit={showWeather}/>
            </div>
        </>
    );
};

export default App;
