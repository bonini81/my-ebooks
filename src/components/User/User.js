import React, { Component } from 'react';
import { FaSkull } from 'react-icons/fa';

const User = (props) => {

    return (

        <React.Fragment>

<div className="bloque-user">
<ul className="ul-lista-users">
<li className="lista-users text-center"><FaSkull /></li>
  <li className="lista-users"><strong>Username:</strong> { props.user_name } </li>   
  <li className="lista-users"><strong>First Name:</strong> { props.first_name } </li> 
  <li className="lista-users"><strong>Last Name:</strong> { props.last_name } </li> 
  </ul>
  </div>
      
        </React.Fragment>
    );

}



/*
@Users Component
This component, outputs the users meta data like username, first name, last name and Dummy Photo.



*/ 

export default User;