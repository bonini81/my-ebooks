import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Book from '../components/Book/Book.js';

const BooksList = () => {

const { axiosInstance } =  useContext(AuthContext);
const [ books, setBooks ] = useState( [] );
const [ text, setText ] = useState('Loading books...'); 

const getBooks = () =>  axiosInstance.get('/api/v1/libros');


useEffect( () => {
        
    getBooks()
    .then(( response ) => {

        const books = response.data;
        setBooks(books);
        setText(`There is ${books.length} books available`);

    })
    .catch (() =>
 
        setText(`There is no books available `)
        );

        //usefect fuciona al cargarse el componente y hay que poner los [] al final sino se vuelve una actualizacion infinita
        // del componente. 

}, [] )



    return (
    <React.Fragment>

    <h1>Mis Libros</h1>
    { text }
    { books.map((book) => {
        return <Book 
        author={book.author}
        title={book.title}
        />
    })}
    </React.Fragment>
    );
}

export default BooksList;
