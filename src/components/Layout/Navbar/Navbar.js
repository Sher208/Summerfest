import React, { Fragment, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../App'
import './Navbar.scss';

const Navbar = () => {

    const {loggedIn, setLoggedIn} = useContext(UserContext);

    const {user, authenticated} = loggedIn;

    const [close, setClose] = useState(true);
    const closeMenu = () => setClose(true);
    const openMenu = () => setClose(false);

    const authenticateUser = () => {
        setLoggedIn({...loggedIn, authenticated: !authenticated});
        closeMenu();
    }

    return (
        <Fragment>
            <div className="header">
                <div className="slidingNavbar">
                    <div className={`slidingContainer ${close ? "": "active"}`}>
                        <div className='closeBtn' onClick={closeMenu}>
                            <i className='fas fa-times'/>
                        </div>
                        <Link to='/' className='nav-links' onClick={closeMenu} >
                            About
                        </Link>
                        <Link to='/seats' className='nav-links' onClick={closeMenu} >
                            Seats
                        </Link>
                        {
                            authenticated ? (
                                <div className="nav-links" onClick={authenticateUser}>
                                    Logout <span>({user})</span>
                                </div>
                            ):(
                                <div className="nav-links" onClick={authenticateUser}>
                                    Login
                                </div>
                            )
                        }
                    </div>
                    <div className={`openBtn ${close ? "": "activeOpen"}`} onClick={openMenu}>
                        <i className='fas fa-bars'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;
