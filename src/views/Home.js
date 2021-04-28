import React, { useContext, useState } from 'react';
import { FcReading } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcUpload } from "react-icons/fc";
import { FcDataBackup } from "react-icons/fc";
import { FcRightUp2 } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { FcRightDown } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FaAngleRight } from 'react-icons/fa';

import { BookContext } from '../contexts/BookContext';


/*
Home View Documentation:
This view display the main paths of the App, Book download area, user creation, etc.

*/ 

//import Book from '../components/Book/';
//import '../custom.css';


const Home = () => {

  const { libros, text } =  useContext(BookContext);
  console.log("La consola te dice: ", text);
    return (  

              <React.Fragment>
      <div className="container">
      <h1 className="titulo-home">Where do i go man? <FcRightUp2 /> <FcRight /><FcRightDown /></h1>
      <p></p>
        <div className="row">
         
          <div className="col-lg-3">
          <a href="/book-list">
          <FcReading size={200} />
        
          </a>
          <p className="link-home-text">Book Download Area <FaAngleRight /></p>
          <p className="link-home-text">Book Counter: { text }</p>
        </div>
        
        <div className="col-lg-3">
          <a href="/signup">
          <FcPortraitMode size={200} />
          </a>
       <p className="link-home-text">User Creation Area <FaAngleRight /></p>
        </div>


        <div className="col-lg-3">
          <a href="/upebook">
          <FcUpload size={200} />
        
          </a>
          <p className="link-home-text">Book Upload Area <FaAngleRight /></p>
          </div>
          <div className="col-lg-3">
          <a href="/profile">
          <FcDataBackup size={200} />
        
          </a>
          <p className="link-home-text">Profile Updating <FaAngleRight /></p>
          </div>



          </div>
          <h2 className="bottom-text-home">You Don't Like what you see?</h2>
    <p className="center"><FaAngleRight size={50} /><a href="/logout"><FcSportsMode size={100} /> </a></p>
      </div>

              </React.Fragment>
        );

}
 
export default Home;