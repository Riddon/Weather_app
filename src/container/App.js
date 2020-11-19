import React from 'react';
import {getCityWeather} from "../services/cityWeatherAPI";


const App = () => {

    const onClick = () => {
        getCityWeather('London').then((result) => {
            console.log('Result -->', result)
        });
    };

    return (
        <>
          <button onClick={onClick}>
            "Start"
          </button>
        </>
    );
};

export default App;
