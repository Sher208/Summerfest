import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/Home/Home';
import Competition from './components/Competition/Competition';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home} />
      <Switch>
        <Route exact path='/competition' component={Competition} />
      </Switch>
    </Router>
    
  );
}

export default App;
