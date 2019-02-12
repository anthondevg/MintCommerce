import React from 'react';
import Signin from '../Components/Signin';
import ProductTable from '../Components/ProductTable';

import { 
 Row,
 Col, } from  'reactstrap';

class Home extends React.Component{
	
	render(){
		return(
			<Row>
                <Col xs="12" sm="3" className="mt-2">
                	<Signin 
                	/>
                </Col>
					<Col xs="12" sm="9">

					<Row>
						<h3>Productos Disponibles.</h3>
					</Row>
					
					<ProductTable />
					
					</Col>
            </Row>
		);
	}
}

export default Home;
