import React from 'react'
import "./styles.css"
import Navbar from "../../components/NavBar/NavBar"
import {BiTransfer} from "react-icons/bi"
import {ImExit} from "react-icons/im"
import {AiFillCar} from "react-icons/ai"
import {FaFileInvoiceDollar} from "react-icons/fa"
import {MdDevices, MdManageAccounts} from "react-icons/md"
import { useNavigate} from 'react-router-dom'


function SelfService() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='selfService'>
                <div className='m-auto selfServicesCard'>
                <div onClick={()=> {navigate("/selfservice/separation")}} className='button-4  sm:w-full xs:w-full md:w-5/12 '> <ImExit className='mx-auto text-4xl text-fourth'/>  <p >  Seperation </p></div>
                <div onClick={()=> {navigate("/selfservice/transfer")}} className='button-4  sm:w-full xs:w-full md:w-5/12 '> <BiTransfer className='mx-auto text-4xl text-fourth'/> <p >  Transfer </p></div>
                <div onClick={()=> {navigate("/selfservice/viewslip")}} className='button-4 sm:w-full xs:w-full md:w-5/12'> <FaFileInvoiceDollar className='mx-auto text-4xl text-fourth'/><p> View PaySlip </p></div>
                <div onClick={()=> {navigate("/selfservice/vehicle")}} className='button-4 sm:w-full xs:w-full md:w-5/12'><AiFillCar className='mx-auto text-4xl text-fourth'/> <p >Vehicle Requests </p></div>
                <div onClick={()=> {navigate("/selfservice/assets")}} className='button-4 sm:w-full xs:w-full md:w-5/12'> <MdDevices className='mx-auto text-4xl text-fourth'/> <p> Assets</p></div>
                <div onClick={()=> {navigate("/selfservice/all-requests")}} className='button-4 sm:w-full xs:w-full md:w-5/12'><MdManageAccounts className='mx-auto text-4xl text-fourth'/> <p>Manage Request  <small>(for managers)</small></p></div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default SelfService
