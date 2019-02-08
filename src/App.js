import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Header from './Components/Header';

// views
import Home from "./Views/Home";
import Category from "./Views/Category";
import Checkout from "./Views/Checkout";
import Login from "./Views/Login";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {
	Container
} from 'reactstrap';


class App extends React.Component {
    
    render() {
        return (

            <HashRouter>
            	 
	            <div>
	               	<Header className="header" />

	                <Container fluid={true} className="content">
	                	<Route exact path="/" component={Home}/>
	                	<Route path="/Login" component={Login}/>
                        <Route path="/Category" component={Category}/>
			            <Route path="/Checkout" component={Checkout}/>
	                </Container> 
	            </div>
            </HashRouter>
        );
    }
}

export default App;
