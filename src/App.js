import React from 'react';
import logo from './logo.svg';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Barranav from './components/Barranav';
import Navigation from './components/Navigation/';
import Nonavigation from './components/Nonavigation/';
// Views
import Login from './views/Login';

import { Container } from 'reactstrap';
import Routes from './Routes';
import './App.css';

function App() {
  return (

    <React.Fragment>
      <Router>
      
     
          <Switch> 
    
            { Routes }
         

          </Switch>
        


      </Router>
      </React.Fragment>
  );

}

export default App;
