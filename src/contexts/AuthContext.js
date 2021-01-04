import axios from 'axios';
import React, { createContext, useState, useEffect }  from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const axiosInstance = axios.create ({
    baseURL: 'https://ebooks-backend.herokuapp.com'
});


//En este caso las props coge los elementos que vienen de otros componentes en este caso, la barra de navegación
// props.children seria lo que jala de otros componentes, i suppose madafaka

const AuthContextProvider = (props) => {

const history = useHistory();
const [ isAuth, setAuth ] = useState(false); 


const getToken = () => {

    return localStorage.getItem('token');

} 

// Clave usar UseEffect para usar el Context en el Login y Logout es el equivalente al ComponentdidMount cuando se usaban clases
// Y para que funcione correctamente el cambio de Login y Logout
useEffect(() => {
    if (getToken() ) setAuth(true);
    }, []);

const setTokenAndLogin = (token) => {

    localStorage.setItem('token', token);
    setAuth(true);
    return history.push('/home');

}


const removeTokenAndLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
}


if (getToken()) {
    axiosInstance.defaults.headers.common['Authorization'] =  `Bearer ${ getToken() }`;
}

    return ( 
        <AuthContext.Provider value={ { 
            color: "red", isAuth, getToken, setTokenAndLogin, removeTokenAndLogout, axiosInstance
            }}>

            { props.children }

        </AuthContext.Provider>
    )
}

export default AuthContextProvider;