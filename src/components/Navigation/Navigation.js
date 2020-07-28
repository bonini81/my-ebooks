import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../views/Home';
import Signup from '../../views/Signup';
import Barranav from '../Barranav';

const Navigation = () => {
    
    return ( 

<React.Fragment>


<Route exact path="/home" component={ Home } ></Route>
<Route exact path="/signup" component={ Signup } ></Route>

</React.Fragment>

     );



}
 
export default Navigation;