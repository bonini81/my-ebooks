import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../views/Home';
import Barranav from '../Barranav';

const Navigation = () => {
    
    return ( 

<React.Fragment>


<Route exact path="/home" component={ Home } ></Route>

</React.Fragment>

     );



}
 
export default Navigation;