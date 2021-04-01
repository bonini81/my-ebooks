import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import User from '../components/User/User.js';
import { FaSkull } from 'react-icons/fa';


const UserList = () => {


    const { axiosInstance, isAuth } =  useContext(AuthContext);
    const [ users, setUsers ] = useState( [] );
    const [ text, setText ] = useState('Loading books...'); 
    
    const getUsers = () =>  axiosInstance.get('/api/v1/users');


    useEffect( () => {

        //  if (!isAuth) return ( <Redirect to="/" /> )
      
          getUsers()
          .then(( response ) => {
      
              const users = response.data;
              setUsers(users);
              setText(`${users.length}`);
            
          })
          .catch (() =>
       
              setText(`No hay usuarios`)
              );
      
              //usefect fuciona al cargarse el componente y hay que poner los [] al final sino se vuelve una actualizacion infinita
              // del componente. 
      
      }, [] )





    return (

    <React.Fragment>

<p className="flex-grow-1  text-center user-count">Al momento hay { text } <FaSkull /></p>

<div className="d-flex justify-content-center bonini-styles">


          <div className="row">
    { users.map((user) => {
         
        return <User 

        key={user._id}
        user_name ={user.user_name}
        first_name ={user.first_name}
        last_name ={user.last_name}
        profile_img ={user.profile_img}

        />
     
    })}
</div>
</div>
    </React.Fragment>

    );
}


export default UserList;