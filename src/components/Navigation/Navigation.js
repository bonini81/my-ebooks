import React from 'react';
import { Link } from 'react-router-dom';
import { FaUpload, FaSignInAlt, FaHome, FaFileSignature } from 'react-icons/fa';


import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
} from 'reactstrap';




const Navigation = () => {
    
    return ( 

<React.Fragment>

<Navbar className="navbar navbar-dark bg-dark" expand="md">
      <NavbarBrand tag={Link} to="/">Bonini81 E-books</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/"><FaSignInAlt /> Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/home"><FaHome /> Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/upebook"><FaUpload /> Upload Ebook</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/signup"><FaFileSignature /> Sign Up</NavLink>
          </NavItem>

     

        </Nav>
      
    </Navbar>

</React.Fragment>

     );



}
 
export default Navigation;