import React from 'react';
import { Link } from 'react-router-dom';
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
} from 'reactstrap';



const Barranav = () => {
    
    return ( 

<React.Fragment>

<Navbar className="navbar navbar-dark bg-dark" expand="md">
      <NavbarBrand tag={Link} to="/">Bonini81 E-books</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home">Home</NavLink>
          </NavItem>
        </Nav>
      
    </Navbar>

</React.Fragment>

     );



}
 
export default Barranav;
