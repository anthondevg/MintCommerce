import React from 'react';
import '../Assets/css/signin.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Signin extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      redirect:false,
      email:'',
      password:'',
    };
    
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin(){

    /*var formData = new FormData();
    
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    */

    // send data to validate to API  
    fetch(
      this.props.action,
        {
          method: this.props.method,
          body: JSON.stringify(this.state),
          headers:{
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res=>res.json())   
      .then((response)=>{
        console.log('Success',response);

        if (response.success) {
          alert('success true');
          let userData = {
            name: response.data.name,
            id: response.data.id,
            email: response.data.email,
            auth_token: response.data.auth_token,
            timestamp: new Date().toString()
          };

          let appState = {
            isLoggedIn: true,
            user: userData
          };

          localStorage["appState"] = JSON.stringify(appState);
          alert('ok guardao en localStorage');
          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
        }
      })
      .catch(err=>{
        alert(`An Error has ocurred! ${err}`);
      });

  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  render(){
    return(
        <Form className="sign-wrapper">  
          <h3>Iniciar Sesion</h3>
          <FormGroup>
            <Label for="email" className="text-muted">Correo</Label>
            <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Su Email..." />
          </FormGroup>
          
          <FormGroup>
            <Label for="examplePassword">Contraseña</Label>
            <Input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Su contraseña" />
          </FormGroup>  
          
          <Button onClick={this.handleLogin}>Entrar</Button>
        </Form> 
     ); 
  }
}


export default Signin;