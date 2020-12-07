import React, { useState, useContext } from 'react';
import { FaUpload, FaSignInAlt, FaHome, FaFileSignature } from 'react-icons/fa';
import { GiPirateFlag } from "react-icons/gi";
import { AuthContext } from '../../contexts/AuthContext';
import { render } from 'react-dom';
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





const Navigation = () => {
const { color, isAuth } = useContext(AuthContext);
const [isOpen, setIsOpen] = useState(false);


const toggle = () => setIsOpen(!isOpen);


  const renderNavigation = () => {

  return isAuth 
  ? (<Navbar 
    className="navbar navbar-dark bg-dark"  expand="md">

      <NavbarBrand tag={Link} to="/"> { color } <GiPirateFlag /> Bonini81 E-books</NavbarBrand>
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
    </Navbar>)

    : ( <Navbar 
    className="navbar navbar-dark bg-dark"  expand="md">

      <NavbarBrand tag={Link} to="/">{color} <GiPirateFlag /> Bonini81 E-books</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/"><FaSignInAlt /> Login</NavLink>
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