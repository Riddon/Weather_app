export const displayCorrectTemperature = (array) => {
    return array.map(item => {
        const dateTime = item.dt_txt;
        const temperature = Math.round(item.main.temp);
        return {dateTime, temperature};
    });
};