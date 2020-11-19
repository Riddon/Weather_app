import React, {useState} from 'react';
import './CityForm.css';

const CityForm = (props) => {
    const {handlerSubmit} = props;
    const [cityName, setCityName] = useState('');

    const onSubmitEvent = (e) => {
        e.preventDefault();
        handlerSubmit(cityName);
    };

    const handlerChange = (e) => {
        setCityName(e.target.value);
    };

    return (
        <>
            <form className="city-name_form" onSubmit={onSubmitEvent}>
                <legend className="city-name_title">
                    Your City Weather
                </legend>
                <p className="city-name_content">
                    <input
                        className="city-name_input"
                        name="city"
                        type="text"
                        placeholder="Example: London"
                        onChange={handlerChange}
                        value={cityName}/>
                    <button className="city-name_btn" type="submit">
                        Show
                    </button>
                </p>
            </form>
        </>
    );
};

export default CityForm;