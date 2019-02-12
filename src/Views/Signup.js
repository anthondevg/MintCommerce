import React from 'react';

import Register from '../Components/RegisterUser';

import { 
  Container,Jumbotron,Col,Row 
} from 'reactstrap';

class Signup extends React.Component{
	
	render(){
		return(
			<Container>
				<Row>
					<Col xs="12" sm="8">
						<Register 
						action="http://mintapi.test/users/add"
						method="POST"
						/>
					</Col>

					<Col xs="12" sm="4">
						<Jumbotron>
							<h3>Registrarse</h3>
							<p>Registrate ya!</p>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Signup;