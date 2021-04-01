import React, { Component } from 'react';


const User = (props) => {

    return (

        <React.Fragment>



  <div className="d-flex">
      
  <p className="lista-users"> { props.user_name } </p>   
      
  
      </div>
        </React.Fragment>
    );

}



/*
@Users Component
This component, outputs the users meta data like username, first name, last name and Dummy Photo.



*/ 

export default User;