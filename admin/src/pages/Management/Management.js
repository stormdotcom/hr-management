import React from 'react'
import "./styles.css"
import Navbar from "../../components/NavBar/NavBar"
import {BsCalendarEvent} from "react-icons/bs"
import { MdManageAccounts, MdAddToQueue} from "react-icons/md"
import {GrAnnounce} from "react-icons/gr"
import { useNavigate} from 'react-router-dom'


function Management() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='selfService'>
                <div className='m-auto selfServicesCard'>
                <div onClick={()=> {navigate("/management/addevents")}} className='button-4  sm:w-full xs:w-full md:w-5/12 '> <BsCalendarEvent className='mx-auto text-4xl text-fourth'/>  <p >  Manage Events </p></div>
                <div onClick={()=> {navigate("/management/announcements")}} className='button-4  sm:w-full xs:w-full md:w-5/12 '> <GrAnnounce className='mx-auto text-4xl text-fourth'/> <p >  Create Announcement </p></div>
                <div onClick={()=> {navigate("/management/assets")}} className='button-4 sm:w-full xs:w-full md:w-5/12'> <MdAddToQueue className='mx-auto text-4xl text-fourth'/><p> Manage Assets </p></div>
                <div onClick={()=> {navigate("/management/all-requests")}} className='button-4 sm:w-full xs:w-full md:w-5/12'><MdManageAccounts className='mx-auto text-4xl text-fourth'/> <p>Manage Request </p></div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Management
