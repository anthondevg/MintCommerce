import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

class Signin extends React.Component{
  render(){
    return(
        <Form>  
          <h3>Iniciar Sesion</h3>
          <FormGroup>
            <Label for="username" className="text-muted">Usuario</Label>
            <Input type="text" name="username" id="username" placeholder="Su nombre de usuario..." />
          </FormGroup>
          
          <FormGroup>
            <Label for="examplePassword">Contraseña</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Su contraseña" />
          </FormGroup>  
          
          <Button>Entrar</Button>
        </Form> 
     ); 
  }
}

export default Signin;