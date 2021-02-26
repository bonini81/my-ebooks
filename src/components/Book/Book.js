import React, { Component } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const Book = (props) => {

    return ( 

<React.Fragment>


    <div className="col-lg-4 estilo-cards-home">
      <Card>
        <CardImg top width="100%" src={ props.book_img } alt="Card image cap" />
        <CardBody>
          <CardTitle className="bookTitle">{ props.book_title }</CardTitle>
          <CardSubtitle className="bookAutor"> { props.book_author } | { props.book_year}</CardSubtitle>
          <CardText>{ props.book_description}</CardText>
          <CardText><FaAngleDoubleRight className="bookCategoryIcon" /> { props.book_category} </CardText>
          
          <a href={props.book_url} className="linkDownload" target="_blank">Descargar Libro</a>
        </CardBody>
      </Card>
      </div>
      


  

</React.Fragment>

     );

}
 
export default Book;