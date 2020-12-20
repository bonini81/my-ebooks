import React, { createContext, useState }  from 'react';

export const AuthContext = createContext();


//En este caso las props coge los elementos que vienen de otros componentes en este caso, la barra de navegación
// props.children seria lo que jala de otros componentes, i suppose madafaka

const AuthContextProvider = (props) => {

const [ isAuth, setAuth ] = useState(false); 

const setToken = (token) => {
    localStorage.setItem('token', token);
    setAuth(true);
}


const removeToken = () => {
    localStorage.removeItem('token');
    setAuth(false);
}


const getToken = () => {

    return localStorage.getItem('token');

} 

    return ( 
        <AuthContext.Provider value={ { 
            color: "red", isAuth, getToken, setToken, removeToken
            }}>

            { props.children }

        </AuthContext.Provider>
    )
}

export default AuthContextProvider;