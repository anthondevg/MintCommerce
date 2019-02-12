import React from 'react';

import { 
  Container,Jumbotron,Col,Row, Button
} from 'reactstrap';
import {
  NavLink,
} from "react-router-dom";

class Signup extends React.Component{
	
	render(){
		return(
			<Container>
				<Row>
					<Col xs="12" sm="12">
						<Jumbotron>
							<h3>404</h3>
							<p>No se encontro esa pagina!</p>
							<Button><NavLink to="/" style="color:white;">Volver al Inicio</NavLink></Button>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Signup;