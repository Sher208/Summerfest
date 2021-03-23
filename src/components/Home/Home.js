import React, { Fragment } from 'react';
import Landing from './Landing/Landing';
import About from './About/About';
import Event from './Event/Event';
import Footer from '../Footer/Footer';
import './Home.scss';

const Home = () => {
    return (
        <Fragment>
            <Landing/>
            <About/>
            <Event/>
            <Footer/>
        </Fragment>
    )
}

export default Home;