import React from 'react';
import logo from './logo.svg';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer/';

// Views
import Login from './views/Login';
import Signup from './views/Signup';





import { Container } from 'reactstrap';
import Routes from './Routes';
import './App.css';

function App() {
  return (

    <React.Fragment>
      <Router>
      
     <Navigation />
          <Switch> 
    
            { Routes }
         

          </Switch>
          
        <Footer />


      </Router>
      </React.Fragment>
  );

}

export default App;
