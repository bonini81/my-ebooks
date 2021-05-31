import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { UserCountContext } from '../contexts/UserCountContext';
import User from '../components/User/User.js';
import { FaSkull } from 'react-icons/fa';
 
const UserList = () => {
    
  
 
    const { axiosInstance, isAuth } =  useContext(AuthContext);
    const { userCount } =  useContext(UserCountContext);

   // const [ users, setUsers ] = useState( [] );
    
   // const getUsers = () =>  axiosInstance.get('/api/v1/users');

  /*  useEffect( () => {
 
           getUsers()
          .then(( response ) => {
      
              const users = response.data;
              setUsers(users);
           
            
          })
          .catch (() =>
       
                setUsers(`No hay usuarios`)
              ); */

              /**
               * usefect fuciona al cargarse el componente y hay que poner los [] al final sino se vuelve una *actualizacion infinita del componente. 
               * 
               */
      
    //  }, [] )





    return (

    <React.Fragment>

<p className="text-center user-count">Al momento hay { userCount.length }  <FaSkull /> </p>


            <h1 className="text-center">Usuarios Activos </h1>
<div className="d-flex flex-wrap flex-usuario-card">


    { userCount.map((user) => {
          
        return <User 

        key={user._id}
        user_name ={user.user_name}
        first_name ={user.first_name}
        last_name ={user.last_name}
        profile_img ={user.profile_img}

        />
     
    })}
                
</div> 
    </React.Fragment>

    );
}


export default UserList;
