import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { useNavigate} from 'react-router-dom'
import {AiFillCaretRight} from "react-icons/ai"
import "./styles.css"
function AssetsReq() {
    const navigate = useNavigate()
    return (
        <>
        <div className='viewPay'>
        <div className="container my-5 tableView py-4 overflow-x-auto">
            <div className='button-groups'> 
            <div className='button-5 font-semibold text-sm'  onClick={()=>{navigate('/selfservice/all-requests')}} > All Requests</div>
                <div className='button-5 font-semibold text-sm'  onClick={()=>{navigate('/selfservice/all-requests/leave')}}> Leave Requests</div>
                <div className='button-5 font-semibold text-sm'  onClick={()=>{navigate('/selfservice/all-requests/vehicle')}}> Vehicle Requests</div>
                <div className='button-5 font-semibold text-sm' style={{backgroundColor:"#3283bd"}} onClick={()=>{navigate('/selfservice/all-requests/assets')}}> Assets Requests</div>
             </div>
             <h6 className='font-bold ml-2 my-2 flex'>  All Requests <AiFillCaretRight className='mx-2' /> Assets Requests </h6>
                        <table className="table-auto border-collapse  w-100 text-center rounded-2xl border border-gray-400">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Employee Name 
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Employee ID 
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Project
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Asset Type
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Asset ID
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Requested Date
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Approved Status
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Comments
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white ">
                                <tr className="whitespace-nowrap">
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                    ₹ 45000.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                        ₹1020.00
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">    ₹2020.00</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                    %10
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                    
                                </tr>
                                <tr className="whitespace-nowrap">
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                    ₹ 45000.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                        ₹1020.00
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">    ₹2020.00</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                    %10
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    ₹500020.00
                                    </td>
                                    <td className="text-sm px-6 py-4">
                                    <div className='button-sm-1 text-sm my-1'>Approve</div>
                                    <div className='button-sm-2 text-sm my-1'>Deline</div>
                                    </td>
                    
                                </tr>
    
                        
                            </tbody>
                        </table>
                    </div>
        </div>
        <NavBar />
        </>
    )
}

export default AssetsReq
