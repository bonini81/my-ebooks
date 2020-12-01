import React, { useState } from 'react';
import axios from 'axios';
import { BsLightningFill } from "react-icons/bs";
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [nombreLibro, setNombreLibro] = useState('');
  const [autorLibro, setAutorLibro] = useState('');
  const [categoriaLibro, setCategoriaLibro] = useState('');
  const [descripcionLibro, setDescripcionLibro] = useState('');
  const [fechaPublicacion, setFechaPublicacion] = useState('');
  const [ebookUp, setEbookUp] = useState('');
  const [email, setEmail] = useState('');
  

  const handleInput = (e) => {
    switch (e.target.name) {

      case "InputNombreLibro":
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
        case "ebookUp":
          setEbookUp(e.target.value)
          break;
     
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      nombre_libro: nombreLibro,
      autor_libro: autorLibro,
      categoria_libro: categoriaLibro,
      descripcion_libro: descripcionLibro,
      fecha_publicacion: fechaPublicacion,
      ebook_up: ebookUp,
      email,
    
    }
    try {
      const res = await axios.post('https://ebooks-backend.herokuapp.com/api/v1/users/signup', jsonSend);
      alert('Successful signup')
    } catch (error) {
      alert('Error on signup')
    }
  }

  return (
    <React.Fragment>
      <section className="form-signup">
      <h2 className="mb-4"><BsLightningFill />Agrega un Libro, Give me Knowlege Baby</h2>
      <Form onSubmit={handleSubmit} >

      <FormGroup>
          <Label>Libro</Label>
          <Input 
            type="text"
            id="nombreLibro"
            name="InputNombreLibro" 
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
            type="text"
            name="fechaPublicacion"
            id="inputFechaPublicacion"
            placeholder="escriba el año publicacion del libro" 
            value={fechaPublicacion}
            onChange={handleInput} />
        </FormGroup>

        <FormGroup>
        <Label for="exampleFile">Sube el Ebook Madafaka</Label>
        <Input 
        type="file" name="ebookUp" 
        id="InputEbookUp"  value={ebookUp} 
        onChange={handleInput} />
      </FormGroup>

        <Button>Enviar</Button>
      </Form>
      </section>
    </React.Fragment>
  );
}
 
export default Signup;