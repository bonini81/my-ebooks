import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';
import { BsLightningFill } from "react-icons/bs";
import { FaBookDead } from 'react-icons/fa';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const UploadBook = () => {

  const { libros, text } = useContext(BookContext);
  const { isAuth, axiosInstance }  = useContext(AuthContext);

  const [nombreLibro, setNombreLibro] = useState('');
  const [autorLibro, setAutorLibro] = useState('');
  const [categoriaLibro, setCategoriaLibro] = useState('');
  const [descripcionLibro, setDescripcionLibro] = useState('');
  const [fechaPublicacion, setFechaPublicacion] = useState('');
  const [urlLibro, setEbookUp] = useState('');
  const [bookPic, setBookPic] = useState('');

  

  const handleInput = (e) => {
    switch (e.target.name) {

      case "inputNombreLibro":
        setNombreLibro(e.target.value)
        break;
      case "inputAutorLibro":
        setAutorLibro(e.target.value)
        break;
      case "categoriaLibro":
        setCategoriaLibro(e.target.value)
        break;
        case "descripcionLibro":
          setDescripcionLibro(e.target.value)
          break;
      case "fechaPublicacion":
        setFechaPublicacion(e.target.value)
        break;
        case "urlLibro":
          setEbookUp(e.target.value)
          break;
     
         case "bookPic":
            setBookPic(e.target.value)
            break;

      default:
        break;
    }
  }

  const formCleanup = () => {

    setNombreLibro('');
    setAutorLibro('');
    setCategoriaLibro('');
    setDescripcionLibro('');
    setFechaPublicacion('');
    setEbookUp('');
    setBookPic('');

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {

      book_title: nombreLibro,
      book_author: autorLibro,
      book_category: categoriaLibro,
      book_description: descripcionLibro,
      book_year: fechaPublicacion,
      book_url: urlLibro,
      book_img: bookPic
          
    }

    try {
      const res = await axiosInstance.post('/api/v1/libros', jsonSend);
      //function para limpiar el formulario una vez que se envie
      formCleanup();
      alert('Libro agregado con éxito!')
    } catch (error) {
      alert('Error al agregar el libro.')
    }
  }

  return (
    <React.Fragment>
      <section className="form-signup">
      <h2 className="mb-4 tituloLibros"><BsLightningFill />Agrega un Libro, Give me Knowlege Baby</h2>
        <h4 className="mb-4 tituloLibros">So far we got, {text} books <FaBookDead /></h4>
      <Form onSubmit={handleSubmit} >

      <FormGroup>
          <Label>Libro</Label>
          <Input 
            type="text"
            id="nombreLibro"
            name="inputNombreLibro" 
            placeholder="escriba el nombre del libro"
            value={nombreLibro}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Autor</Label>
          <Input 
            type="text"
            id="autorLibro"
            name="inputAutorLibro" 
            placeholder="escriba el autor del libro"
            value={autorLibro}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Categoria</Label>
          <Input
            type="text" 
            name="categoriaLibro" 
            id="inputCategoriaLibro" 
            placeholder="escriba la categoria del libro"
            value={categoriaLibro}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Descripción</Label>
          <Input
            type="textarea"
            name="descripcionLibro"
            id="inputDescripcionLibro"
            placeholder="escriba la descripcion del libro"
            value={descripcionLibro}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Año Publicacion</Label>
          <Input 
            type="number"
            name="fechaPublicacion"
            id="inputFechaPublicacion"
            placeholder="escriba el año publicacion del libro" 
            value={fechaPublicacion}
            onChange={handleInput} />
        </FormGroup>

        <FormGroup>
          <Label>URL Libro</Label>
          <Input 
            type="text"
            id="inputUrlLibro"
            name="urlLibro" 
            placeholder="escriba el nombre del libro"
            value={urlLibro}
            onChange={handleInput} />
        </FormGroup>

        <FormGroup>
        <Label for="exampleFile">Sube el Pic del Libro</Label>
        <Input 
        type="file" name="bookPic" 
        id="InputBookPic"  value={bookPic} 
        onChange={handleInput} />
      </FormGroup>
 

        <Button>Enviar</Button>
      </Form>
      </section>
    </React.Fragment>
  );
}
 
export default UploadBook;