import React, { Component } from "react";
 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

import {
  Route,
  NavLink as RRNavLink,
  HashRouter
} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
           <Navbar color="inverse" light expand="md">
            
            <NavbarBrand to="/" tag={RRNavLink}>Mint Commerce</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/" tag={RRNavLink}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Category/" tag={RRNavLink}>Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Checkout/" tag={RRNavLink}>Checkout</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Login/" tag={RRNavLink}>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">Carrito(0)</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
        );
    }
}

export default Header;