import React, {useState} from 'react'
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import DateToday from '../DateToday/DateToday';
import {Logout,Person, Notifications} from '@mui/icons-material';
import SideBar from "../SideBar/SideBar"
function NavBar() {

    return (
        <div>
            <Navbar className='navbar' expand="lg">
            <SideBar />
  <Container>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home"> <DateToday /> </Nav.Link>
        <Nav.Link href="#link"><Notifications /></Nav.Link>
        <NavDropdown title="Ajmal Nasumudeen" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Person />  Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><Logout />  Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default NavBar
