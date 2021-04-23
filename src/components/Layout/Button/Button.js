import React from 'react';
import './Button.scss';

const Button = ({children, color, onClick, disabled, ...rest}) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled} {...rest}>
            {children}
        </button>
    )
}

export default Button;