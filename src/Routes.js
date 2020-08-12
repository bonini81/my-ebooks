import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer/';

// Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';
import UploadBook from './views/UploadBook';

export default [



<React.Fragment>

<Route exact path="/" component={ Login } ></Route>
<Route exact path="/home" component={ Home } ></Route>
<Route exact path="/signup" component={ Signup } ></Route>
<Route exact path="/upebook" component={ UploadBook } ></Route>

</React.Fragment>

  

];