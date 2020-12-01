import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUpload, FaSignInAlt, FaHome, FaFileSignature } from 'react-icons/fa';
import { GiPirateFlag } from "react-icons/gi";

import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
} from 'reactstrap';
import { render } from 'react-dom';




const Navigation = (props) => {

const [isOpen, setIsOpen] = useState(false);
const token = localStorage.getItem("token");
console.log("Got the token, you are in my man.", token);

const toggle = () => setIsOpen(!isOpen);


  const renderNavigation = () => {

  return token ? (<Navbar 
    className="navbar navbar-dark bg-dark"  expand="md">

      <NavbarBrand tag={Link} to="/"><GiPirateFlag /> Bonini81 E-books</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
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
        </Collapse>
    </Navbar>)

    : ( <Navbar 
    className="navbar navbar-dark bg-dark"  expand="md">

      <NavbarBrand tag={Link} to="/"><GiPirateFlag /> Bonini81 E-books</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/"><FaSignInAlt /> Logout</NavLink>
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
        </Collapse>
    </Navbar> )     
}
 
 return (
<React.Fragment>
  { renderNavigation() }
</React.Fragment>

 );

}

export default Navigation;