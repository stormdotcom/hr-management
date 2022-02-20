import React from 'react';
import {FaUserAlt} from "react-icons/fa"
import "./styles.css"
import {} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Swal from "sweetalert2"
import {submitAward} from "../../api/api"
function SkillCard( {fullname, empID, desigination, selectedFile, userID, skills }) {
    const latestSkill = skills.slice(Math.max(skills.length - 4, 0))
    console.log()
    const {score} = latestSkill.reduce((acc, curr)=> ({score: acc.score + curr.score}))
    const skill = latestSkill.map((ele)=> Math.floor(ele.score+ele.selfRating /110))
    const skillSet = []
    let obj={}
    for(let i=0; i<latestSkill.length; i++ ){
      skillSet.push({...latestSkill[i], skill:skill[i] })

    }
    const handleAward = (userID)=>{
          Swal.fire({
            text: 'Do you want send an Award?',
            showCancelButton: true,
            confirmButtonText: 'Award',
          }).then(async(result) => {
            if (result.isConfirmed) {
                const { value: awardType } = await Swal.fire({
                    title: 'Select Award for',
                    input: 'select',
                    inputOptions: {
                      'Award Type': { Excellence: 'For Excellence', Performance : 'For Best Performance of month', Contribution: 'For Contributing to Organisation'},
                    },
                    inputPlaceholder: 'Select a Category',
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to Select a Category!'
                          }
                    }     
                    
                  })
                  const { value: Description } = await Swal.fire({
                    input: 'textarea',
                    inputLabel: 'Description for ' +awardType,
                    inputPlaceholder: 'Enter the Description',
                    inputValidator: (value) => {
                        if (!value) {
                          return 'You need to Enter the Description!'
                        }
                    }  
                  
                })
                let form = {userID, score, awardType, Description}
                submitAward(form).then(()=>Swal.fire('Saved!', '', 'success'))
                .catch((err)=> Swal.fire('Error!', '', 'info'))

            } 
          })
          
   
    }

  return <div className='flex space-x-2' >

      <div className='flex skillCard flex-col pl-4'> 
      <div className='flex justify-center items-center mx-auto my-auto p5 ml-auto'> 
     {selectedFile ? <Avatar sx={{ width: 100, height: 100 }}  src={selectedFile} alt="profile-face" /> 
     : <FaUserAlt  size="50px"/> }

      </div>
      <div>        
           <h6 className='truncate font-bold text-base'> {fullname} </h6>
        <h6 className='truncate font-semibold text-sm'> {empID}</h6>
        <p className='font-semibold text-sm'> {desigination}</p> </div>
        <h6 className='truncate font-bold text-right text-base'> Overall Score : {score} </h6>
        <hr />
      <div className='flex flex-col'>
      <div className='flex justify-start ms-3'>     
             <div className='flex mx-2 w-2/5 '>
            <p className='font-semibold text-md text-left'> Skills </p> 
            </div>
            
            <div className='flex mx-2 w-2/5 flex-end'>
            <p className='font-semibold text-md  text-center'> Rating</p> 
            </div>
             </div>
             {skillSet.map((ele, i)=>{
          return (
            <div key={i} className='flex justify-start ms-3'>     
            <div className='flex mx-2 w-2/5 '>
           <p className='font-semibold text-sm text-left'>  {ele?.technology}</p> 
           </div>
           <div className='flex flex-end mx-2 w-2/5'>
           <p className='font-semibold text-sm text-center'> {ele?.skill} </p> 
           </div>
            </div>
          )
        })}
      </div>


             <div className='flex justify-center items-center space-x-2'>
                 <div className='button-sm-1 text-sm p-2' onClick={()=>handleAward(userID)}> Send Award</div>
             </div>
    </div>

    

  </div>;
}

export default SkillCard;
    