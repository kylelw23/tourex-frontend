import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
