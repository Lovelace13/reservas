// import logo from '../assets/img/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from './landingPage';
import Local from './locales/localDetail'
import Login from './Login/Login'
import store from './store';
import { Provider } from 'react-redux';
import ProtectedLogin from './utils/ProtectedLogin';
import Home from './Home';

//import Login from './Login';

const App = (props) => {
  return (
    <Provider store={store}>
      <Router>    
        <Switch>
          {/* <Route path="/" component={Login} exact /> */}
          <ProtectedLogin exact path="/login" component={Login} />
          <Route path="/home">
            <Home></Home>
            {/* <LandingPage></LandingPage> */}
          </Route>
          <Route path="/local/:localId">
            <Local local=":localId"></Local>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
