import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import {Routes} from './Routes';
import {connect} from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/Routing/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { loadUser } from './actions/auth';
import Cookies from 'js-cookie';
import './App.scss';


export const UserContext = React.createContext();

console.log(Cookies.get('token'));

if (Cookies.get('token')) {
  console.log("moving inside function");
  setAuthToken(Cookies.get('token'));
}

function App({isAuthenticated, userAuth, loadUser, loadingAuth, tokenAuth}) {

  const [loggedIn, setLoggedIn] = useState({
    id: '',
    name: '',
    email: '',
    authenticated: false
  })

  useEffect(() => {
    console.log('Inside Use Effect');
    if(tokenAuth){
      loadUser();
    }
  }, [loadUser, tokenAuth]);

  useEffect(() => {
    if(userAuth != null){
      setLoggedIn({
        id: !loadingAuth ? userAuth.id:'',
        name: !loadingAuth ? userAuth.name:'',
        email: !loadingAuth ? userAuth.email:'',
        authenticated: isAuthenticated
      })
    }
  }, [loadingAuth])

  return (
    <Router>
      <UserContext.Provider value={{loggedIn, setLoggedIn}}>
        <Navbar/>
        <Switch>
          {
            Routes.map(({name, path, component, privateRoute}) => {
              if(!privateRoute){
                return <Route key={name} exact path={path} component={component}/>
              }else{
                return <PrivateRoute key={name} exact path={path} component={component}/>
              }
            })
          }
        </Switch>
      </UserContext.Provider>
    </Router>
    
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.getAuth.isAuthenticated,
  userAuth: state.getAuth.user,
  loadingAuth: state.getAuth.loading,
  tokenAuth: state.getAuth.token
});

const mapDispatchToProps = (dispach) => ({
  loadUser: () => dispach(loadUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
