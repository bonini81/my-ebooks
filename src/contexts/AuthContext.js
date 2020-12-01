const { default: src } = require("*.bmp");
import React, { createContext }  from 'react';

export const AuthContext = createContext();

const AuthContextProvider = () => {

    return (

        <AuthContext.Provider value={ { color: "blue" } }>

        </AuthContext.Provider>

    )

}

export default AuthContextProvider;