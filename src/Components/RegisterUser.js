import React from 'react';

import { 
  Col,Row, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import {
  Redirect
} from "react-router-dom";

class Register extends React.Component{

	constructor(props){
		super(props);

		//nested state are a bad practice cause you have to mutate the entire object every time a property change
		this.state = {
			name: '',	
			surname: '',	
			email: '',	
			password: '',
			redirect: false	
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (event) {
	  this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		fetch(
			this.props.action,{
			method: this.props.method,
			body: JSON.stringify(this.state),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res=>res.json())
		.catch(err=>{
			this.setState({redirect:false});
			console.log(err); 
		})
		.then(response=>{
			
			console.log('Success ',response);
			this.setState({redirect:true});
		});

	}

	render(){
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to="/Login"/>;
		}

		return(

			<Form action="return; false" method={this.props.method} onSubmit={this.handleSubmit}>
				<h3>Registrarse</h3>
			
				<Row form>
		          <Col md={6}>
		            <FormGroup>
		              <Label for="name">Nombre</Label>
		              <Input 
		              		type="text" 
		              		name="name" 
		              		value={this.state.name}
		              		onChange={this.handleChange}
		              		/>
		            </FormGroup>
		          </Col>
		          <Col md={6}>
		            <FormGroup>
		              <Label for="surname">Apellido</Label>
		              <Input 
		              		type="text" 
		              		name="surname" 
		              		value={this.state.surname}
		              		onChange={this.handleChange}
		              		 />
		            </FormGroup>
		          </Col>
		        </Row>
		        <FormGroup>
		          <Label for="exampleEmail">Email</Label>
		          <Input 
		          		type="email" 
		          		name="email" 
		          		value={this.state.email}
		          		onChange={this.handleChange}
		          		 />
		        </FormGroup>
		        <FormGroup>
		          <Label for="examplePassword">Password</Label>
		          <Input 
		          		type="password" 
		          		name="password" 
		          		value={this.state.password}
		          		onChange={this.handleChange}
		          		 />
		        </FormGroup>

		        <Button type="submit" onClick={this.handleSubmit}>Registro</Button>
			</Form>
		);
	}
}

export default Register;