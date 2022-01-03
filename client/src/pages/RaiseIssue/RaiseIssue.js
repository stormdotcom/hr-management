import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./styles.css"

function RaiseIssue() {
    return (
        <>
        <div className='viewPay'>
            <div className='assetRequest'>

        <div className="container my-5 tableView py-4">
            <h6 className='text-center font-semibold'>Ticket List</h6>
                        <table className="table-auto border-collapse  w-100 text-center">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Ticket ID
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Subject
                                    </th>

                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Created On
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Comments
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white border border-gray-400">
                                <tr className="whitespace-nowrap">
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                    EC-ISSUE-1001
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                        AntiVirus Installation
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                   Resolved
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                    30-12-2021
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                    <button className='button-1' >View  </button>
                                    </td>
                                </tr>
                        
    
                        
                            </tbody>
                        </table>
                    </div>
                    <div className="container mx-auto mainForm">
			<div className="flex justify-center px-6 my-12">
			
				<div className="w-full  flex">
					
					<div className="w-full p-1 rounded-lg lg:rounded-l-none">
						<form className="px-2 pt-1 pb-4 mb-2">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Employee Name
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
                                            Employee ID
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
										Team
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										name="time"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
                                    Priority
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
                                    Date
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
			
										type="date"
										name="projectName"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
                                    Approver
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
			
										type="text"
										name="projectName"
									/>
								</div>
								             
                            <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Issue 
									</label>
									<textarea
										className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="remarks"
										name="remarks"
                                        rows="3" cols="71"
									></textarea>
								</div>
                         
              

							
							</div>
				
							<div className="mb-2 text-center flex justify-end">
								<button
									className="button-1"
									type="button"
								>
									Raise this Issue
								</button>
							</div>
						
						</form>
					</div>
                    
				</div>
			</div>
            
		</div>
        
            </div>
    
        </div>
         <NavBar />
         </>
    )
}

export default RaiseIssue
