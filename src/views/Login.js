import React from 'react';

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
					<Form>
				        <FormGroup>
				          <Label for="exampleEmail">Email</Label>
				          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
				        </FormGroup>
				        <FormGroup>
				          <Label for="examplePassword">Password</Label>
				          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
				        </FormGroup>
				        <Button>Iniciar Sesión</Button>
				    </Form>
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