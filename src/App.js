import React from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import {Routes} from './Routes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {
          Routes.map(({name, path, component, privateRoute}) => {
            if(!privateRoute){
              return <Route exact path={path} component={component}/>
            }
          })
        }
      </Switch>
    </Router>
    
  );
}

export default App;
