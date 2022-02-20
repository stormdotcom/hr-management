import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaUsers, FaHandPointer } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { MdAddToQueue } from "react-icons/md";
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
                 {!menuCollapse ? <h5> HR Stack</h5> 
                 : <> <h5> HR </h5> <img className="logoImage" src={Stack} height="20px" width="20px" alt="logo" /> </>}

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
            
             <MenuItem  className="sideBarItem"  onClick={()=> {navigate("/")}} icon={<FiHome />}>  <p>Home</p> </MenuItem> 
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/management")}} icon={<FaHandPointer />}>  <p>Managements </p> </MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/manage-assets")}} icon={<MdAddToQueue />}>  <p>Assets  </p> </MenuItem>
              <MenuItem className="sideBarItem" onClick={()=> {navigate("/manage-users")}} icon={<FaUsers />}>  <p>Employees </p> </MenuItem>
              
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;