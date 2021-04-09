import React,  { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';

export const UserNameContext = createContext();

const UserNameContextProvider = (props) => {

    const [ username, setUsername ] = useState(null); 

   const getUsername = () => {

        const encodedToken = localStorage.getItem('token');
        const decodedToken = decode(encodedToken);
        setUsername(decodedToken.data);
        console.log(username.user_name);

   }
  



    return (

        <UserNameContext.Provider value={{ 
            
            favorite: "Erick Elliott", getUsername
         }}>
        { props.children }
        </UserNameContext.Provider>

)



}

export default UserNameContextProvider;