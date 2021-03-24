import React from 'react';
import './Backdrop.scss';

const Backdrop = ({clicked, show}) => {
  return (
    show ? <div onClick={clicked} className="backdrop"></div> : null
  )
}

export default Backdrop;