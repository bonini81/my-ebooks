import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Login from '../../views/Login';


const Nonavigation = () => {
    
    return ( 

<React.Fragment>


<Route exact path="/" component={ Login } ></Route>

</React.Fragment>

     );



}
 
export default Nonavigation;
