import React from 'react';
import "./styles.css"
import {RiComputerFill} from "react-icons/ri";
import {FaUserAlt} from "react-icons/fa"
import { returnAsset} from "../../api/api"
import Swal from 'sweetalert2';
function NameCard( {fullname, empID, desigination, img, cardID, type,secondName,secondCode,  button, assetId }) {


  const handleReturn = (assetId)=>{
    Swal.fire({
        text: 'Are you sure want return '+secondName+' from '+empID +'?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          returnAsset(assetId).then(res=>  Swal.fire('Saved!', '', 'success'))
          .catch(err=> Swal.fire('not save!', '', 'error'))
          
        } else if (result.isDenied) {
          Swal.fire('Changes not saved', '', 'info')
        }
      })
}
  return <div className='flex justify-space nameCard' >
    <div className='flex justify-center items-center mx-auto my-auto p5 ml-auto'>
      {type ? <RiComputerFill className='mx-auto text-4xl text-fourth'/>  :
     <FaUserAlt className='mx-auto text-4xl text-fourth'/>  }
    </div>
    <div className='flex flex-col pl-4 text-ellipsis'> 
        <h6 className=' font-bold text-base'> {fullname} </h6>
        <h6 className='font-semibold text-sm'> {empID}</h6>
        <p>{secondName} </p>
        <p>{secondCode} </p>
        <p className='font-semibold text-sm'> {desigination}</p>
        {button &&   <div className='flex justify-end'>
           <div className='button-sm-1' onClick={()=>handleReturn(assetId)}>Return</div> 
           </div>}

    </div>
  </div>;
}

export default NameCard;
    