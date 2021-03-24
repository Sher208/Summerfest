import React, { Fragment, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {

    const [close, setClose] = useState(true);


    const closeMenu = () => setClose(true);
    const openMenu = () => setClose(false);

    return (
        <Fragment>
            <div class="slidingNavbar">
                <div class={`slidingContainer ${close ? "": "active"}`}>
                    <div className='closeBtn' onClick={closeMenu}>
                        <i className='fas fa-times'/>
                    </div>
                    <Link to='/' className='nav-links' onClick={closeMenu} >
                        About
                    </Link>
                    <Link to='/competition' className='nav-links' onClick={closeMenu}>
                        Competitions
                    </Link>
                </div>
                <div class={`openBtn ${close ? "": "activeOpen"}`} onClick={openMenu}>
                    <i className='fas fa-bars'/>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;
