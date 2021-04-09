import React,  { createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    return (

        <BookContext.Provider value={{ favorite: "Erick Elliott" }}>
        { props.children }
        </BookContext.Provider>

)



}

export default BookContextProvider;