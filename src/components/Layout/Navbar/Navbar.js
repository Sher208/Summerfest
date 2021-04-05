import React, { Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

    const [close, setClose] = useState(true);


    const closeMenu = () => setClose(true);
    const openMenu = () => setClose(false);

    return (
        <Fragment>
            <div className="slidingNavbar">
                <div className={`slidingContainer ${close ? "": "active"}`}>
                    <div className='closeBtn' onClick={closeMenu}>
                        <i className='fas fa-times'/>
                    </div>
                    <Link to='/' className='nav-links' onClick={closeMenu} >
                        About
                    </Link>
                </div>
                <div className={`openBtn ${close ? "": "activeOpen"}`} onClick={openMenu}>
                    <i className='fas fa-bars'/>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;
