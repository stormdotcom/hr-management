import React, {useEffect} from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { useNavigate} from 'react-router-dom'
import {AiFillCaretRight} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initial, fetchAssetReq, fetchIssues } from '../../../redux/requests/requestSlice'
import Swal from "sweetalert2"
import {getAssetRequest, activeTickets} from "../../../api/api"
import "./styles.css"
function ManageReq() {
    const {issues, assets} =  useSelector(state => state.requests)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        
        dispatch(initial())
        getAssetRequest().then(res=> dispatch(fetchAssetReq(res.data)))
        .catch(err=> console.log(err.message))

        activeTickets().then(res=> dispatch(fetchIssues(res.data)))
        .catch(err=> console.log(err.message))
    }, [navigate])
    let isloading=false
    if(!issues.length && !assets.length) isloading=true
    const handleView = (data, name, id, type)=>{
        Swal.fire({
            title: '<strong>'+  type +'</strong>',
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
    const handleResolve = async (id)=>{
        const { value: comments } = await Swal.fire({
            title: 'Resolved Comments',
            input: 'text',
            inputLabel: 'comments here',
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
            }
          })
          
          if (comments) {
            Swal.fire(`Your IP address is ${comments}`)
          }
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
            <div className='button-5 font-semibold text-sm my-1 mx-1'  onClick={()=>{navigate('/management/all-requests')}} style={{backgroundColor:"#3283bd"}}> All Requests</div>
                <div className='button-5 font-semibold text-sm my-1 mx-1' onClick={()=>{navigate('/management/all-requests/assets')}}> Assets Requests</div>
                <div className='button-5 font-semibold text-sm my-1 mx-1'  onClick={()=>{navigate('/management/all-requests/tickets')}}> Raised Tickets</div>
             </div>
             <h6 className='font-bold ml-2 my-2 flex'>  All Requests <AiFillCaretRight className='mx-2' />  </h6>
             {isloading ? <div className='flex justify-center'> <p>No Data</p></div>
                       : <table className="table-auto border-collapse  w-100 text-center rounded-lg border border-gray-400">
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
                                        Request Type
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Approved Status
                                    </th>
                                    <th className="px-4 py-2 text-xs text-gray-500 ">
                                        Comments
                                    </th>
                                </tr>
                            </thead>
                            {isloading ? <tbody><tr> <td> No Data...</td> </tr> </tbody> : 
                            <tbody className="bg-white bg-red-400">
                                {issues.map((ele, i)=>{
                                    return(
                                        <tr style={{backgroundColor: ele.priority ==="High" ? "#ffe6e6" : ""}} className= "whitespace-nowrap" key={i}>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                       {ele.employeeName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                            {ele.employeeID}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">    {ele?.project}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        Technical Issue
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        {ele.resolved ? "Resolved" : "Pending"}
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        <div className='button-sm-1'onClick={()=>handleView(ele.issue, ele.employeeName, ele.subject, "")}>View </div>
                                        </td>
                                    </tr>
                                    );
                                })}
                                   {assets.map((ele, i)=>{
                  return (
                    <tr className="whitespace-nowrap" key={i}>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {ele.employeeName}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {ele.employeeID}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">
                          {" "}
                          {ele.projectName}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Assets Request
                      </td>
                      <td className="text-sm px-6 py-4">
                        {ele.resolved ? "Resolved" : "Pending"}
                      </td>
                      <td className="text-sm px-6 py-4">
                        <div
                          className="button-sm-1"
                          onClick={() =>
                            handleView(
                              ele.comments,
                              ele.employeeName,
                              ele.employeeID,
                              "Asset Request"
                            )
                          }
                        >
                          View{" "}
                        </div>
                      </td>
                    </tr>
                  )
                })}
                            </tbody> }
                        </table>
                        }
                    </div>
        </div>
        <NavBar />
        </>
    )
}

export default ManageReq
