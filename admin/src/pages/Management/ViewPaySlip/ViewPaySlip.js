import React, {useState} from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import "./styles.css"
import ViewSlip from './viewSlip'
import { Link } from 'react-router-dom'

function ViewPaySlip() {
  const [viewed, setViewed] = useState(false)
  const handleView = ()=>{
    setViewed((prev) => !prev)

  }
  const handleClose = (value)=> {
    setViewed(value)
}
    return (
        <>
        <div className='viewPay'>
        <nav class="rounded-md w-full">
  <ol class="list-reset flex">
    <li> <Link to="/selfservice">Self Service </Link></li>
    <li><span class="text-gray-500 mx-2">/</span></li>
    <li class="text-gray-500">View Pay-Slip</li>
  </ol>
</nav>
          {viewed ? <div  className="overflow-x-auto"> <ViewSlip handleClose={handleClose} /> </div> :
        <div className='separationStatus'>
            <h5 className='mt-4 mb-2 text-center pt-4 font-semibold'>Payment Information</h5>
     <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                Month
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
              Working Days
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
              Days Payable
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
              Total Amount
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
              Deductions
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
              Net Pay
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
              View / Download
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr class="border-b font-medium">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">     1 </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Sep
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            30
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              30
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1,000,000.00
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                30,000.00
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                70,000.00
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-around border-none">
                  <button className='button-1' onClick={handleView}>View Slip </button>
                  <button className='button-2' >Download Slip </button>

              </td>
            </tr>
{/*  */}
<tr class="border-b font-medium">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">     1 </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Oct
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            30
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              30
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              1,000,000.00
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                30,000.00
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                70,000.00
              </td>
              <td class="text-sm text-gray-900 font-semibold px-6 py-4  flex justify-around border-none">
              <button className='button-1'>View Slip </button>
                  <button className='button-2'>Download Slip </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

            </div>
            }
                <div className='SlipForm'>

                </div>
            
        </div>
        <NavBar />
        </>
    )
}

export default ViewPaySlip
