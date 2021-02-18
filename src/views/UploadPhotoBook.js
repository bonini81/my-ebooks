import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
//import axios from 'axios';
import { BsLightningFill } from "react-icons/bs";
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const UploadBook = () => {

  const { isAuth, axiosInstance }  = useContext(AuthContext);


  const [bookPic, setBookPic] = useState('');

  

  const handleInput = (e) => {
    switch (e.target.name) {
     
          case "bookPic":
            setBookPic(e.target.value)
            break;

      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {

      book_img: bookPic
          
    }

    try {
      const res = await axiosInstance.post('/api/v1/libros', jsonSend);
      alert('Libro agregado con éxito!')
    } catch (error) {
      alert('Error al agregar el libro.')
    }
  }

  return (
    <React.Fragment>
      <section className="form-signup">
      <h2 className="mb-4"><BsLightningFill />Agrega un Libro, Give me Knowlege Baby</h2>
      <Form onSubmit={handleSubmit} >

   
        
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