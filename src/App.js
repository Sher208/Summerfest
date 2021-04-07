import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import {Routes} from './Routes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

export const UserContext = React.createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState({
    user: 'admin',
    authenticated: false
  })

  return (
    <Router>
      <UserContext.Provider value={{loggedIn, setLoggedIn}}>
        <Navbar/>
        <Switch>
          {
            Routes.map(({name, path, component, privateRoute}) => {
              if(!privateRoute){
                return <Route key={name} exact path={path} component={component}/>
              }
            })
          }
        </Switch>
      </UserContext.Provider>
    </Router>
    
  );
}

export default App;
