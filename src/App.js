import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Signin from './Components/Signin';
import Product from './Components/Product';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';


class App extends React.Component {
    
    render() {
        return (
            <div>
               	<Header />
                <Container>
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
                </Container>
            </div>
        );
    }
}

export default App;
