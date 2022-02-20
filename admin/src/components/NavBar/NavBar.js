import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import DateToday from '../DateToday/DateToday';
import {Logout } from '@mui/icons-material';
import SideBar from "../SideBar/SideBar"
import { useNavigate } from 'react-router-dom'
import { useDispatch} from "react-redux"
import { logout} from "../../redux/login/loginSlice"


function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = ()=>{
    dispatch(logout('Logged out Successfully'))
    navigate("/signin")

  }
  const {result} = JSON.parse(localStorage.getItem("admin"))
    return (
        <div>
            <Navbar className='navbar' expand="lg">
              <SideBar />         
    <Container>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto'   />
    <Navbar.Collapse id="basic-navbar-nav" className='ml-auto'>
      <Nav className="ml-auto flex items-center pr-5 mr-5">
        <NavDropdown title={`${result.fullname}         `} id="basic-nav-dropdown">
        <NavDropdown.Item >  <DateToday/> </NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}> <Logout />  Logout </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>  
</Navbar>

        </div>
    )
}

export default NavBar
