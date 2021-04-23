import React, { Fragment, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../App';
import {connect} from 'react-redux';
import {logout} from '../../../actions/auth';
import './Navbar.scss';

const Navbar = ({logout}) => {

    const {loggedIn, setLoggedIn} = useContext(UserContext);

    const {id, name, email, authenticated} = loggedIn;

    const [close, setClose] = useState(true);
    const closeMenu = () => setClose(true);
    const openMenu = () => setClose(false);

    const logoutClick = () => {
        setLoggedIn({id:'', name:'', email:'',authenticated: false});
        logout();
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
                        {
                            authenticated && (
                                <div class="user-name">
                                    <h1>{name}</h1>
                                </div>
                            )
                        }
                        <Link to='/' className='nav-links' onClick={closeMenu} >
                            About
                        </Link>
                        {
                            authenticated ? (
                                <>
                                    <Link to='/seats' className='nav-links' onClick={closeMenu} >
                                        Seats
                                    </Link>
                                    <div className='nav-links' >
                                        <a  href='/' onClick={logoutClick}>
                                            <span> Logout</span>
                                        </a>
                                    </div>
                                </>
                            ):(
                                <>
                                    <Link to='/login' className='nav-links' onClick={closeMenu} >
                                        Sign In
                                    </Link>
                                    <Link to='/register' className='nav-links' onClick={closeMenu} >
                                        Register
                                    </Link>
                                </>    
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

const mapDispatchToProps = dispach => ({
    logout: () => dispach(logout())
});

export default connect(null, mapDispatchToProps)(Navbar);
