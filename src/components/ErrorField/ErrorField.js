import React from 'react';
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

export default ErrorField;