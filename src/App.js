import React from 'react';
import logo from './logo.svg';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer/';

// Views
import Login from './views/Login';
import Signup from './views/Signup';

//Context
import AuthContextProvider from './contexts/AuthContext';


import { Container } from 'reactstrap';
import Routes from './Routes';
import './App.css';
import UserNameContextProvider from './contexts/UserNameContext';
import BookContextProvider from './contexts/BookContext';
 

function App() {
  return (

    <React.StrictMode>
    <React.Fragment>
      <Router>
      <AuthContextProvider>
      <BookContextProvider>
      <UserNameContextProvider>
     
      <Navigation />

          <Switch> 
    
            { Routes }
         
          </Switch>
          
        <Footer />

  
      </UserNameContextProvider>
      </BookContextProvider>
      </AuthContextProvider>
      </Router>
      </React.Fragment>
      </React.StrictMode>
  );

}

export default App;
