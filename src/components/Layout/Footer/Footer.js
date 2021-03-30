import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-company-icon">
                <h2>Fest</h2>
            </div>
            <div className="footer-icons">
                <a href="#!"><i className="fa fa-facebook"></i></a>
                <a href="#!"><i className="fa fa-twitter"></i></a>
                <a href="#!"><i className="fa fa-instagram"></i></a>
                <a href="#!"><i className="fa fa-youtube"></i></a>
            </div>
            <div className="footer-company-name">
                <p>Developed by <span>Thilak</span> </p>
            </div>
            
        </footer>
    )
}

export default Footer;