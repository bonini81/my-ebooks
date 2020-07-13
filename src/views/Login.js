import React, { useState } from 'react';
import axios from 'axios';

import {
    Button,  
    Form,  
    FormGroup,
    Label,  
    Input,
  } from 'reactstrap';


const Login = () => {


      //Desestructuracion de un array en este caso

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleInput = (e) => {

    switch (e.target.name) {

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
      
      email,
      password
    
    }
    try {
      const res = await axios.post('https://bonini81-backend.herokuapp.com/api/v1/users/login', jsonSend);
      window.location.href = '/home';
      console.log('Successful Login');

    } catch (error) {
      alert('Fuck off madafaka!');
      console.log('Fatal Error');
    }
  }

    return ( 
        
        <React.Fragment>
      <div className="estilos-formulario">
      <Form onSubmit={handleSubmit} className="form-signin">
      <h1>Login to MyLinks</h1>
      <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email"
            value={email}
            onChange={handleInput} />
        </FormGroup>
      
        <FormGroup>
          <Label>Password</Label>
          <Input 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" 
            value={password}
            onChange={handleInput} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    </React.Fragment>

    );



}
 
export default Login;
