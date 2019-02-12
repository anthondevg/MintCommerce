import React from 'react';
import './App.css';

//components
import Header from './Components/Header';

// views
import Home from "./Views/Home";
import Category from "./Views/Category";
import Checkout from "./Views/Checkout";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import NoMatch from "./Views/Nomatch";

import {
  Route,
  HashRouter,
  Switch
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
                        <Switch>
	                	<Route exact path="/" component={Home}/>
	                	<Route path="/Login" component={Login}/>
                        <Route path="/Signup" component={Signup}/>
                        <Route path="/Category" component={Category}/>
                        <Route path="/Checkout" component={Checkout}/>
			            <Route component={NoMatch}/>
                        </Switch>
	                </Container> 
	            </div>
            </HashRouter>
        );
    }
}

export default App;
