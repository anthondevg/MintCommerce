import React, { Component } from "react";
 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
} from 'reactstrap';

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
            <NavbarBrand href="/">Mint Commerce</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/Category/">Category</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Category/">Category</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Category/">Category</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Carrito(0)</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        );
    }
}

export default Header;