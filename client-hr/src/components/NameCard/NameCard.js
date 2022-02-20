import React from 'react';
import {FaUserAlt} from "react-icons/fa"
import "./styles.css"
import {useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
function NameCard( {fullname, empID, desigination, selectedFile, cardID, project}) {
  const navigate = useNavigate()
  return <div className='flex space-x-2 nameCard' onClick={()=>{navigate(`/view-employees/${cardID}`)}}>
    <div className='flex justify-center items-center mx-auto my-auto p5 ml-auto'> 
     {selectedFile ? <Avatar sx={{ width: 100, height: 100 }}  src={selectedFile} alt="profile-face" /> 
     : <FaUserAlt  size="50px"/> }

      </div>
    <div className='flex flex-col pl-4'> 
        <h6 className='truncate font-bold text-base'> {fullname} </h6>
        <h6 className='truncate font-semibold text-sm'> {empID}</h6>
        <p className='font-semibold text-sm'> {desigination}</p>
        <p className='font-light text-xs'>Project: {project}</p>
    </div>
  </div>;
}

export default NameCard;
    