import * as types from "../constants/constTypes";

export function getCityWeather(cityWeather) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_CITY_WEATHER,
      payload: cityWeather
    });
  };
}

export function clearCityWeather() {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_CITY_WEATHER
    });
  };
}
