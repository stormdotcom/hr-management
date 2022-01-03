import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import "./styles.css"

function Cab() {
    return (
        <>
        <div className='viewPay'>
            <div className='cabRequest'>
            <div className="container mx-auto mainForm">
			<div className="flex justify-center px-6 my-12">
			
				<div className="w-full  flex">
					
					<div className="w-full p-1 rounded-lg lg:rounded-l-none">
						<form className="px-2 pt-1 pb-4 mb-2">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Pick-Up Point
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										name="pickuppoint"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Drop Point
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										name="dropPoint"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Pick Up Time
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="time"
										name="time"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Project Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
			
										type="text"
										name="projectName"
									/>
								</div>
							
							</div>

                            <div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Employee Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										
										type="text"
										name="employeeName"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Contact Number
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
								
										type="text"
										name="contactNumber"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Remarks
									</label>
									<textarea
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="time"
										name="remarks"
                                        rows="3" cols="61"
									></textarea>
								</div>

							
							</div>
				
							<div className="mb-2 text-center flex justify-end">
								<button
									className="button-1"
									type="button"
								>
									Submit
								</button>
							</div>
						
						</form>
					</div>
                    
				</div>
			</div>
            
		</div>
        <div className="container my-5 tableView py-4">
                        <table className="table-auto border-collapse  w-100 text-center">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Employee Name & Contact Details
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Pick-Up Point
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Drop Point
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Pick-Up Time
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Current Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white border border-gray-400">
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
                        
    
                        
                            </tbody>
                        </table>
                    </div>
        
            </div>
    
        </div>
         <NavBar />
         </>
    )
}

export default Cab
