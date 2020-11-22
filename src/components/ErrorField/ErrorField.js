import React from 'react';
import propTypes from "prop-types";
import './ErrorField.css';

const ErrorField = ({message}) => {

    return (
        <>
            <p className="error-field">
                {message}
            </p>
        </>
    );
};

ErrorField.propTypes = {
    message: propTypes.string
};

export default ErrorField;