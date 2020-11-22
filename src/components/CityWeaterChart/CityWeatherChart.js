import React from 'react';
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart
} from 'recharts';
import './CityWeatherChart.css';
import {useSelector} from "react-redux";

const CityWeatherChart = () => {
    const cityWeather = useSelector(
        (state) => state.cityWeatherReducer.cityWeather
    );

    if (cityWeather.length <= 0) {
        return false;
    } else {
        return (
            <div className="city-weather__bar">
                <h2 className="city-weather__title">{cityWeather.city}</h2>
                <ResponsiveContainer height="100%" width="100%">
                    <ComposedChart
                        layout="vertical"
                        data={cityWeather.temperature}
                        margin={{
                            top: 0, right: 20, bottom: 20, left: 40,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="dateTime" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="temperature" barSize={20} fill="#413ea0" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
};

export default CityWeatherChart;
