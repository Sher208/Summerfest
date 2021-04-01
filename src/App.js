import React from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import EventPage from './components/EventPage/EventPage';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/competition/:id' component={EventPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
    
  );
}

export default App;
