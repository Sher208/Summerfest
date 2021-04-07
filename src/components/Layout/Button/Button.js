import React from 'react';
import './Button.scss';

const Button = ({children, color, onClick, disabled}) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;