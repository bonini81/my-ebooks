import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import {AuthContext}  from '../contexts/AuthContext';


const Logout = (props) => {

    
    const { removeTokenAndLogout } = useContext(AuthContext);
    removeTokenAndLogout();
    alert('Sucessful logout');
    //history.push('/');
    //Como Logout es un componente tiene que retornar o hacer return de un JSX, por eso no funciona el history push, sin un return.
    
 
    return (
        <Redirect to="/" />
    )
}


export default Logout;

