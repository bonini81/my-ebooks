import React from 'react';
import { FcReading } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcUpload } from "react-icons/fc";
import { FcDataBackup } from "react-icons/fc";

//import Book from '../components/Book/';
//import '../custom.css';


const Home = () => {
    
    return (  

              <React.Fragment>
      <div className="container">
      <h1 className="titulo-home">Where do i go man?</h1>
        <div className="row">
         
          <div className="col-lg-3">
          <a href="#">
          <FcReading size={200} />
        
          </a>
          Book Download Area
        </div>

        <div className="col-lg-3">
          <a href="#">
          <FcPortraitMode size={200} />
        
          </a>
        User Creation Area
        </div>


        <div className="col-lg-3">
          <a href="#">
          <FcUpload size={200} />
        
          </a>
          Book Upload Area
          </div>
          <div className="col-lg-3">
          <a href="#">
          <FcDataBackup size={200} />
        
          </a>
         Profile Updating
          </div>
          </div>
      </div>

              </React.Fragment>
        );

}
 
export default Home;