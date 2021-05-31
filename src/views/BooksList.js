import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import Book from '../components/Book/Book.js';
import { FaDatabase } from 'react-icons/fa';
import  { BookContext } from '../contexts/BookContext';


const BooksList = () => {

const { axiosInstance, isAuth } =  useContext(AuthContext);
const { favorite } =  useContext(BookContext);

const [ books, setBooks ] = useState( [] );
const [ text, setText ] = useState('Loading books...'); 

const getBooks = () =>  axiosInstance.get('/api/v1/libros');


useEffect( () => {

  //  if (!isAuth) return ( <Redirect to="/" /> )

    getBooks()
    .then(( response ) => {

        const books = response.data;
        setBooks(books);
        setText(`Al momento hay ${books.length} libros disponbiles`);

    })
    .catch (() =>
 
        setText(`No hay libros disponibles`)
        
        );

        //usefect fuciona al cargarse el componente y hay que poner los [] al final sino se vuelve una actualizacion infinita
        // del componente. 

}, [] )



    return (
    <React.Fragment>

   
    <div className="container">
        <br/>
    <h1 className="tituloLibros"><FaDatabase /> { favorite } Mis Libros</h1>
    <p>{ text }  </p>
          <div className="row">
    { books.map((book) => {
         
        return <Book 
        key={book._id}
        book_author ={book.book_author}
        book_title ={ book.book_title }
        book_img = {book.book_img}
        book_description = {book.book_description}
        book_year = { book.book_year }
        book_url = { book.book_url }
        book_category = {book.book_category}

        />
     
    })}
       </div>
        </div>
    </React.Fragment>
    );
}

export default BooksList;
