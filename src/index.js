import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import { bindActionCreators } from 'redux'
import configureStore from './store';
import {loadCompetitions} from './actions/competition'
import './index.css';
import App from './App';

const store = configureStore();

// const mapStateToProps = (state) => ({
//   competition: state.competitionReducer
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch,
//     ...bindActionCreators({
//       loadCompetitions
//     }, dispatch),
//   }
// };

// const App = connect(mapStateToProps,mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
