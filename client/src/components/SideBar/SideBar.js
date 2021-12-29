import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaUserGraduate, FaHandPointer } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {AiTwotoneEdit} from "react-icons/ai";
import {  RiCustomerService2Fill } from "react-icons/ri";
import {  GiSkills } from "react-icons/gi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";
import Stack from "../NavBar/Stack-logo.svg"
import "react-pro-sidebar/dist/css/styles.css";
import "./styles.css";
import { useNavigate } from 'react-router-dom'


const SideBar = () => {
    const navigate = useNavigate()
    
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logoSection">
             <div className="logoTopSec">
                 {!menuCollapse &&  <h5> HR </h5>}
             <img className="logoImage" src={Stack} height="20px" width="20px" alt="logo" />
             </div>
             
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
              
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="">
            
             <MenuItem  className="sideBarItem" active={true} onClick={()=> {navigate("/")}} icon={<FiHome />}>  <p>Home</p> </MenuItem> 
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/selfservice")}} icon={<FaHandPointer />}>  <p> Self Services </p> </MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/timesheet")}} icon={<BsFillCalendarWeekFill />}> <p> Time Sheet </p></MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/leave")}} icon={<AiTwotoneEdit />}> <p> Leave </p></MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/tickets")}} icon={<RiCustomerService2Fill />}> <p> Tickets </p></MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/learnings")}} icon={<FaUserGraduate />}> <p> Learnings </p></MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/skillsets")}} icon={<GiSkills />}> <p> Skill Sets </p> </MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/performance")}} icon={<MdOutlineSpeed />}><p> Perfomance </p> </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;