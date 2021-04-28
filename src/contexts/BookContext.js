import React,  { createContext, useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';


export const BookContext = createContext();


/**
 * 
 * lOOKS LIKE THE ERROR IS FROM THAT THERE IS NO HEADER WITH TOKEN FOR THE GET REQUEST
 * lETS REUSE THE AUTHCONTEXT COMPONENT TO AVOID REPEATING MYSELF MAN!
 */



const BookContextProvider = (props) => {

    
    const { axiosInstance } =  useContext(AuthContext);
    const [ libros, setLibros ] = useState( null );
    const [ text, setText ] = useState( null );
    

    
   
    const getLibros = () =>  axiosInstance.get('/api/v1/libros');

    useEffect( () => {

      getLibros()
      .then(( response ) => {
        
          const libros = response.data;
          setLibros(libros);
          setText(`${libros.length}`);
   
  
      })
      .catch ((error) =>
   
      setText(`No hay libros mmv`)

          );

          /**
           * usefect fuciona al cargarse el componente y hay que poner los [] al final sino se vuelve una actualizacion 
           * infinita  del componente. 
           */

  
  }, [] )

    return (

        <BookContext.Provider value={{
            getLibros, libros, text
         }
        
        }>


        { props.children }
        </BookContext.Provider>

)



}

export default BookContextProvider;