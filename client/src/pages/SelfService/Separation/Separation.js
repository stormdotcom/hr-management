import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import "./styles.css"
import TextEditor from '../../../components/TextEditor/TextEditor';
function Seperation() {
    return (
        <>        <div className='separation'>
            <div>

            </div>
            <div className='separationForm bg-feild p-4 '>
                <h5 className='mt-4 mb-2 text-center font-semibold'>Employee Seperation Request</h5>
                <TextEditor />
                <div className='flex justify-end'>
                <button className='button-1'> Request </button>
                </div>
                
            </div>

            <div className='separationStatus'>
            <h5 className='mt-4 mb-2 text-center pt-4 font-semibold'>Seperation Status</h5>
            <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                Date Requested
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                Project
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                Leaving Date
              </th>
              <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                Approved Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b font-medium">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">     12-2-2021</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Dvelopement & Services
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mathew
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Jacob
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Pending
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Pending
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Larry
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Wild
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr>
          </tbody>
        </table>
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

export default Seperation
