import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {

      case "inputUserName":
        setUserName(e.target.value)
        break;
      case "inputFirstName":
        setFirstName(e.target.value)
        break;
      case "lastName":
        setLastName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      user_name: userName,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
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
      <h1 className="mb-4">Registro VIP</h1>
      <Form onSubmit={handleSubmit} >

      <FormGroup>
          <Label>Usuario</Label>
          <Input 
            type="text"
            id="userName"
            name="inputUserName" 
            placeholder="escriba su nombre de usuario"
            value={userName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Nombre</Label>
          <Input 
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="escriba su nombre"
            value={firstName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Apellido</Label>
          <Input
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="escriba su apellido"
            value={lastName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="escriba su email"
            value={email}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Clave</Label>
          <Input 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="escriba su clave" 
            value={password}
            onChange={handleInput} />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
      </section>
    </React.Fragment>
  );
}
 
export default Signup;