import React from 'react'
import {FaBarcode} from "react-icons/fa"
import {IoMdClose} from "react-icons/io"
function viewSlip({handleClose}) {
    // const handleClose = (prev)=> {
    //     console.log(setViewed)
    //     setViewed(!prev)
    // }

    return (
        <div className='z-auto '>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-3/5 bg-white shadow-lg">
                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-3xl italic font-extrabold tracking-widest text-indigo-500">example company</h1>
                    </div>
                    <div className="p-2">
                        <ul className="flex">
                            <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <span className="text-sm">
                                    www.examplecompany.com
                                </span>
                                <span className="text-sm">
                                    www.hrstack.com
                                </span>
                            </li>
                            <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm">
                                   example company, 2821 Kensington Road,Avondale Estates, GA 30002 USA
                                </span>
                            </li>
                            <li style={{cursor:"pointer"}} onClick={()=>handleClose(false)}> <IoMdClose /> </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>
                <div className="flex justify-between p-4">
                    <div>
                        <h6 className="font-bold"> Date : <span className="text-sm font-medium"> 12/12/2022</span></h6>
                        <h6 className="font-bold">Employee ID : <span className="text-sm font-medium"> 12/12/2022</span></h6>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold"> Days Payble  : </span>
                            30
                
                        </address>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold">Account No :</span>
                            2432323
                        </address>
                    </div>
                    <div></div>
                </div>
                <div className="flex justify-center p-4">
                    <div className="border-b border-gray-200 shadow">
                        <table className="w-80">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Basic
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Deductions
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Allowance
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Tax
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
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
                                    <td className="px-6 py-4">
                                    ₹500020.00
                                    </td>
                                </tr>
                        
                                <tr className="">
                                    <td colspan="3"></td>
                                    <td className="text-sm font-bold">Net Pay</td>
                                    <td className="text-sm font-bold tracking-wider"><b>₹500020.00</b></td>
                                </tr>
    
                        
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <div>
                       
                        <ul className="text-xs list-disc list-inside">
                            <li>"This is an auto-generated pay-slip and does not require any signature". If you have any queries, please email support support@hrstack.com</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <small>Digitally Signed</small>
                        <div className="text-4xl italic text-indigo-500"><FaBarcode  className='w-full'/> </div>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>

                <div className="p-4">
                    <div className="flex items-end justify-end space-x-3">
                    <div className='button-1 ' > Close</div> 
                        <button className="px-4 py-2 text-sm text-green-600 bg-green-100">Print</button>
                    </div>
                </div>

            </div>
        </div>

        </div>
    )
}

export default viewSlip
