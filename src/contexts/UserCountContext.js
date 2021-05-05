import React,  { createContext, useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';


export const UserCountContext = createContext();


/**
 * 
 * lOOKS LIKE THE ERROR IS FROM THAT THERE IS NO HEADER WITH TOKEN FOR THE GET REQUEST
 * lETS REUSE THE AUTHCONTEXT COMPONENT TO AVOID REPEATING MYSELF MAN!
 */



const UserCountContextProvider = (props) => {

    
  const { axiosInstance } = useContext(AuthContext);
  const [userCount, setUserCount] = useState('No hay users wey');

  
  
  const getUserCount = () =>  axiosInstance.get('/api/v1/users');

  useEffect( () => {

    getUserCount()
    .then(( response ) => {
      
        const usersCount = response.data;
        setUserCount( usersCount.length );
      
 

    })
    .catch ((error) =>
 
    setUserCount('No hay usuarios wey!')

        );

        /**
         * usefect fuciona al cargarse el componente y hay que poner los [] al final sino se vuelve una actualizacion 
         * infinita  del componente. 
         */


}, [] )
  

    return (

        <UserCountContext.Provider value={{
          userCount
         }
        
        }>


        { props.children }
        </UserCountContext.Provider>

)



}

export default UserCountContextProvider;