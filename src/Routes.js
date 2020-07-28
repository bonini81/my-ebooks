import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation/';
import Nonavigation from './components/Nonavigation/';
import Barranav from './components/Barranav/';
import Footer from './components/Footer/';

// Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';


export default [

  

<React.Fragment>

<Barranav />
<Nonavigation />
<Navigation />
<Footer />     
  

  </React.Fragment>
  

];