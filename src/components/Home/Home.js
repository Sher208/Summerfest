import React, { Fragment } from 'react';
import Landing from './Landing/Landing';
import About from './About/About';
import Event from './Event/Event';
import Footer from '../Layout/Footer/Footer';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Landing/>
            <About/>
            <Event/>
            <Footer/>
        </>
    )
}

export default Home;