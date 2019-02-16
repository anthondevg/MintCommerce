import React from 'react';
import Signin from '../Components/Signin.js'

import { 
  Container,Jumbotron,Col,Row, Button, Form, FormGroup, Label, Input 
} from 'reactstrap';

class Login extends React.Component{
	constructor(props){
		super(props);

		this.state = {}
	}
	render(){
		return(
			<Container>
				<Row>
					<Col xs="6" sm="6" className="mt-1">
						<Signin 
						action="http://mintapi.test/api/user/login"
						method="POST"
						 />
					</Col>
					<Col xs="6" sm="6" className="mt-1">
						<Jumbotron>
							<h1>Iniciar Sesión</h1>
							<p>Hola, Inicia Sesión!</p>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Login;