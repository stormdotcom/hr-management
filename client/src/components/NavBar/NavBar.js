import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import DateToday from '../DateToday/DateToday';
import {Logout,Person} from '@mui/icons-material';
import SideBar from "../SideBar/SideBar"
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { logout} from "../../redux/login/loginSlice"
import {final} from "../../redux/employee/employeeSlice"
import Avatar from '@mui/material/Avatar';


function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = ()=>{
    dispatch(final())
    dispatch(logout('Logged out Successfully'))
    navigate("/signin")

  }
  const {data} = useSelector(state=> state.employee)
    return (
        <div>
            <Navbar className='navbar' expand="lg">
              <SideBar />
           
  <Container>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto'   />
    <Navbar.Collapse id="basic-navbar-nav" className='ml-auto'>
    <Nav className="ml-auto flex items-center pr-5 mr-5">
        <Nav.Link> {data?.selectedFile && <Avatar sx={{ width: 24, height: 24 }} src={data?.selectedFile} alt="profile-face" />  } </Nav.Link>
        <NavDropdown title={data.fullname} id="basic-nav-dropdown">
        <NavDropdown.Item >  <DateToday/> </NavDropdown.Item>
          <NavDropdown.Item onClick={()=> {navigate("/profile")}} > <Person />  Profile </NavDropdown.Item>
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
