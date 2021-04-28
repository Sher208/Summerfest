import React from 'react';
import './Error.scss';

const Error = ({heading, text}) => {
    return (
        <div className="error-body">
            <h1 className="error-heading">{heading}</h1>
            <p className="error-text">{text}</p>
        </div>
    )
}

export default Error;