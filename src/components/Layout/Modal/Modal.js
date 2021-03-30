import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import './Modal.scss';

const Modal = ({children, show, closed}) => {
    return (
        <>
            <Backdrop show={show} clicked={closed}/>
            <div className="Modal" 
            style={{transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
            }}>
                {children}
            </div>
        </>
    )
}

export default Modal;