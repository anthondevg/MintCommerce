import React from 'react';
import Signin from '../Components/Signin';
import Product from '../Components/Product';

import { 
 Row,
 Col, }from  'reactstrap';

class Home extends React.Component{
	render(){
		return(
			<Row>
                <Col xs="12" sm="2" className="mt-1">
                	<Signin />
                </Col>
					<Col xs="12" sm="10">
					<Row>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
					</Row>
					</Col>
            </Row>
		);
	}
}

export default Home;
