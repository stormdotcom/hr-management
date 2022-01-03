import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./styles.css"
function Leave() {
    return (
        <>
        <div className="viewPay">
            <div className='leaveForm'>
                <div className='topSecLeave'>
                    <div className='leaveInfoCard'> <h5 className='font-bold'>Causal Leave Balance</h5> <p>1 </p> </div>
                    <div className='leaveInfoCard'> <h5 className='font-bold'>Holidays this Year</h5> <p>3 </p>  </div>
                    <div className='leaveInfoCard'> <h5 className='font-bold'>Sick Leave Balance</h5> <p>1 </p>  </div>

                </div>
                <div className="container mx-auto mb-8 mainForm">
			<div className="flex justify-center px-6 my-12">
			
				<div className="w-full  flex">
					
					<div className="w-full p-1 rounded-lg lg:rounded-l-none">
						<form className="px-2 pt-1 pb-4 mb-2">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Leave Type
									</label>
									<input
										className="w-full px-5 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										name="pickuppoint"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
                                            From Date
									</label>
									<input
										className="w-full px-5 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="date"
										name="dropPoint"
									/>
								</div>
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										To Date
									</label>
									<input
										className="w-full px-5 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="firstName"
										type="date"
										name="time"
									/>
								</div>
							
							</div>

                            <div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Manager
									</label>
									<input
										className="w-full px-5 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										
										type="text"
										name="employeeName"
									/>
								</div>
               
                                <div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-medium text-gray-700" >
										Reason
									</label>
									<textarea
										className="w-full px-5 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
										id="remarks"
										name="remarks"
                                        rows="3" cols="84"
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
            </div>
            
        </div>
        <NavBar />
        </>

    )
}

export default Leave
