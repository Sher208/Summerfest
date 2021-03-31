import React from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Home/Home';
import Competition from './components/Competition/Competition';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import EventPage from './components/EventPage/EventPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home} />
      <Switch>
        <Route exact path='/competition' component={Competition} />
        <Route exact path='/competition/:id' component={EventPage} />
      </Switch>
    </Router>
    
  );
}

export default App;
