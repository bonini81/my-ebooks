import React,  { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';

export const UserNameContext = createContext();

const UserNameContextProvider = (props) => {

    const [ username, setUsername ] = useState('No name Madafaka'); 
 



   useEffect(() => {
    
    const encodedToken = localStorage.getItem('token');

    if (encodedToken) {
  
        const decodedToken = decode(encodedToken);
         setUsername(decodedToken.data);
        

    } 
    }, []);
  


    return (

        <UserNameContext.Provider value={{ 
            
         username, 
         }}>
        { props.children }
        </UserNameContext.Provider>

)



}

export default UserNameContextProvider;