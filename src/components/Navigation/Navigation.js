import React, { useState, useContext } from 'react';
import { FaUpload, FaSignInAlt, FaHome, FaFileSignature, FaBook, FaSkull } from 'react-icons/fa';
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

const { isAuth, getToken } = useContext(AuthContext);
const [isOpen, setIsOpen] = useState(false); 
const token = getToken();
console.log(token);

const toggle = () => setIsOpen(!isOpen);

const publicNavbar = () => {

  return ( <Navbar 
    className="navbar navbar-dark bg-dark"  expand="md">

      <NavbarBrand tag={Link} to="/"> <FaSkull /> Bonini81 E-books</NavbarBrand>
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

const authNavbar = () => {

  return (<Navbar 
      className="navbar navbar-dark bg-dark"  expand="md">
  
        <NavbarBrand tag={Link} to="/"> <FaSkull className="skullIcono" /> Bonini81 E-books</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/logout"><FaSignInAlt /> Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/home"><FaHome /> Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/book-list"><FaBook /> BooksList</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/upebook"><FaUpload />Ebook</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/signup"><FaFileSignature /> Sign Up</NavLink>
            </NavItem>
  
          </Nav>
          </Collapse>
      </Navbar>)
}


  const renderNavigation = () => {

    return isAuth
  ? authNavbar()

    : publicNavbar() 

}
 
 return (
<React.Fragment>
  { renderNavigation() }
</React.Fragment>

 );

}

export default Navigation;