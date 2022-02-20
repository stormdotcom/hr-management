import React from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { useNavigate} from 'react-router-dom'
import {AiFillCaretRight} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import moment from 'moment'
import Swal from "sweetalert2"
import {resolveIssue, delayIssue} from "../../../api/api"
import "./styles.css"
function RaisedIssue() {
    const navigate = useNavigate()
    const {issues} = useSelector(state => state.requests)
    let loader = false
    if(!issues.length) loader = true
    const handleResolve =  (id)=>{
        Swal.fire({
            title: 'Confirm Resolve?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              const { value: text } = await Swal.fire({
                input: 'textarea',
                inputLabel: 'Comments',
                inputPlaceholder: 'Type Resolved Comments here...',
                showCancelButton: true,
                inputAttributes: {
                  'aria-label': 'Type Resolved Comments here'
                },
                inputValidator: (value) => {
                    if (!value) {
                      return 'You need to write something!'
                    }
              }})
              
              if (text) {
                  let  data={id:id, data:text}
                resolveIssue(data).then(()=> Swal.fire(`Resolve updated`))
                .catch(()=> Swal.fire(`Resolve updation failed`))
              }
            } 
          })
    }
    const handleDelay =  (id)=>{
        Swal.fire({
            title: 'Confirm Delay?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              const { value: text } = await Swal.fire({
                input: 'textarea',
                inputLabel: 'Why Delayed?',
                inputPlaceholder: 'Type Comments here...',
                showCancelButton: true,
                inputAttributes: {
                  'aria-label': 'Type Comments here'
                },
                inputValidator: (value) => {
                    if (!value) {
                      return 'You need to write something!'
                    }
              }})
              
              if (text) {
                let  data={id:id, data:text}
                delayIssue(data).then(()=> Swal.fire(`Done`))
                .catch(()=> Swal.fire(`Resolve updation failed`))
              }
            } 
          })
    }
    
    const handleView = (data, name, id, pr)=>{
        Swal.fire({
            title: '<strong>'+ pr + ' Priority Ticket </strong>',
            html:
              ' <b>'+ name+ '</b> | ' +
              ' <b>'+ id + '\n </b>' +
              '</br>'
              +"\n"+ data+  "\n",
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
          })
    }
    return (
        <>
        <div className='separation'>
        <nav className="rounded-md w-full">
  <ol className="list-reset flex">
    <li> <Link to="/management">Managements </Link></li>
    <li><span className="text-gray-500 mx-2">/</span></li>
    <li className="text-gray-500">Manage Requests</li>
  </ol>
</nav>
        <div className="container mt-1 mb-5 tableView py-2 overflow-x-auto">
            <div className='button-groups button-groups1'> 
            <div className='button-5 font-semibold text-sm my-1 mx-1'  onClick={()=>{navigate('/management/all-requests')}} > All Requests</div>
                <div className='button-5 font-semibold text-sm my-1 mx-1'  onClick={()=>{navigate('/management/all-requests/assets')}}> Assets Requests</div>
                <div className='button-5 font-semibold text-sm my-1 mx-1' style={{backgroundColor:"#3283bd"}} onClick={()=>{navigate('/management/all-requests/tickets')}}> Raised Tickets</div>
             </div>
             <h6 className='font-bold ml-2 my-2 flex'>  All Requests <AiFillCaretRight className='mx-2' /> Raised Issue </h6>
             {loader ? "No Data" : 
             <table className="table-auto border-collapse  w-100 text-center rounded-2xl border border-gray-400">
                            <thead className="bg-gray-50">
                                <tr>
                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Ticket ID
                                    </th>
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
                                        Priority
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Requested Date
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                         Status
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
                                { issues.map((ele, i)=>{
                                    return (
                                        <tr style={{backgroundColor: ele.priority ==="High" ? "#ffe6e6" : ""}} key={i} className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                        {ele._id.substr(ele._id.length - 4).toUpperCase()}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {ele.employeeName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                            {ele.employeeID}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">    {ele.project}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {ele.priority}
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        {moment(ele.date).utc().format('DD-MM-YYYY')} 
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        {!ele.resolved && "Pending " }
                                        {ele.onDelay &&   "On Progress - Delay" }
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        <div className='button-sm-1'onClick={()=>handleView(ele.issue, ele.employeeName, ele.subject, ele.priority)}>View </div>
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        <div className='button-sm-1 text-sm my-1' onClick={()=>handleResolve(ele._id)}>Resolve</div>
                                        <div className='button-sm-1 text-sm my-1' onClick={()=>handleDelay(ele._id)}>Delay </div>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>}  
                    </div>
        </div>
        <NavBar />
        </>
    )
}

export default RaisedIssue
