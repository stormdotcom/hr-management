import React, {useState, forwardRef, useEffect} from 'react'
import NavBar from '../../../components/NavBar/NavBar'
import { useNavigate} from 'react-router-dom'
import {AiFillCaretRight} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import moment from 'moment'
import Swal from "sweetalert2"
import {declineAssetReq,getAssetRequest, setAsset} from "../../../api/api"
import { useDispatch } from 'react-redux'
import { initial, fetchAssetReq, fetchAllAssets } from '../../../redux/requests/requestSlice'
import {getAllAssets} from "../../../api/api"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

import "./styles.css"
function AssetsReq() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {assets, allAssets} = useSelector(state => state.requests)
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] =useState({userID:null, userName:null, reqId:null})
    const handleClickOpen = (requestID, id, name)=>{
        setCurrentUser({userID:id, userName:name, reqId:requestID})
        setOpen(true)
    }
    const handleClose = () => {
        navigate("/management/all-requests/")
        setOpen(false);  
      };
    const assignAsset =   (assetId, currentUser, assetName)=>{
        const {reqId, userID, userName} = currentUser
        let form = {reqId, assetId, userID,}
        handleClose()
        Swal.fire({
            title: 'Do you want to assign ' + assetName+' to '+ userName+'?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Assign',
            denyButtonText: `Don't Assign`,
          }).then(async (result) => {
            if (result.isConfirmed) {
               await  setAsset(form).then((res)=>{
              
                   Swal.fire('Updated and Saved', '', 'success')})
               .catch((err)=> {Swal.fire(err.message, '', 'info')})
            } else if (result.isDenied) {
              Swal.fire('Canceled!', 'Changes are not saved', 'info')
            }
          })

    }

    

    useEffect(() => {
        
        dispatch(initial())
        getAssetRequest().then(res=> dispatch(fetchAssetReq(res.data)))
        .catch(err=> console.log(err.message))

        getAllAssets().then((res)=>dispatch(fetchAllAssets(res.data)))
        .catch((err)=>{console.log(err.message)})

        return () => {
            dispatch(fetchAssetReq([]))
            setCurrentUser({userID:null, userName:null, reqId:null})
        };
    }, [navigate, dispatch])
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
   

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
    const handleDecline =async (reqID)=>{
        let formData={}
        const { value: text } =  Swal.fire({
            input: 'textarea',
            inputLabel: 'Comment on Decline',
            inputPlaceholder: 'Type your Comment here...',
            inputAttributes: { 'aria-label': 'Type your Comment here' },
            showCancelButton: true,
            inputValidator: async (value) => {
              if (!value) {
                return 'You need to write Commment !'
              }
              formData={id:reqID, data:text} 
              declineAssetReq(formData)
              .then(res=> Swal.fire('Declined and updated!', '', 'success'))
              .catch(err=> Swal.fire('Fail Updating!', '', 'info'))
            }
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
                <div className='button-5 font-semibold text-sm my-1 mx-1' style={{backgroundColor:"#3283bd"}} onClick={()=>{navigate('/management/all-requests/assets')}}> Assets Requests</div>
                <div className='button-5 font-semibold text-sm my-1 mx-1'  onClick={()=>{navigate('/management/all-requests/tickets')}}> Raised Tickets</div>
             </div>
             <div>

                    <Dialog
                    maxWidth='lg'
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description" >   
      <div className="container mt-1 mb-5 tableView py-2 overflow-x-auto">
     <div className='flex justify-end'>  <Button onClick={handleClose}> Close X</Button> </div> 
     {allAssets.length ? 
      <table className="table-auto border-collapse  w-100 text-center rounded-2xl border border-gray-400">
          <thead className="bg-gray-50">
              <tr>
              <th className="px-4 py-2 text-xs text-gray-500 ">
                   Asset Code
                  </th>
                  <th className="px-4 py-2 text-xs text-gray-500 ">
                  Asset Name
                  </th>
                  <th className="px-4 py-2 text-xs text-gray-500 ">
                  Asset Model
                  </th>
                  <th className="px-4 py-2 text-xs text-gray-500 ">
                  Asset Category
                  </th>
                  <th className="px-4 py-2 text-xs text-gray-500 ">
                       Status
                  </th>
                  <th className="px-4 py-2 text-xs text-gray-500 ">
                  Actions
                  </th>

              </tr>
          </thead>
          <tbody className="bg-white ">
              { allAssets.map((ele, i)=>{
                  return (
                      <tr style={{backgroundColor: ele.priority === 3 ? "#ffe6e6" : ""}} key={i} className="whitespace-nowrap">
                      
                      <td className="px-6 py-4 text-sm text-gray-500">
                      {ele.assetCode}
                      </td>
                      <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                          {ele.assetName}
                          </div>
                      </td>
                      <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">    {ele.assetModel}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                      {ele.assetCategory}
                      </td>
                      <td className="text-sm px-6 py-4">
                      {ele.healthStatus ? "Good Condtion" : "Damaged/Broken"} 
                      </td>
                      <td className="text-sm px-6 py-4">
                      <div className='button-sm-1'onClick={()=>assignAsset(ele._id, currentUser, ele.assetName)}>Assign </div>
                      </td>
                  </tr>
                  )
              })}
          </tbody>
      </table>
      : <div className='flex justify-center'> <p>No assets Available</p> </div>}
      </div>          


</Dialog>
</div>
             <h6 className='font-bold ml-2 my-2 flex'>  All Requests <AiFillCaretRight className='mx-2' /> Assets Requests </h6>
             {assets.length ?     <table className="table-auto border-collapse  w-100 text-center rounded-lg border border-gray-400">
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
                                        Requested Date
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
                                {assets.map((ele, i)=>{
                                    return (
                                        <tr key={i} className="whitespace-nowrap">
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500"> {ele.employeeName} </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                        {ele.employeeID}
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        {ele?.projectName}
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        {ele.assetType}
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        
                                        {moment(ele?.requestedDate).utc().format('DD-MM-YYYY')}   
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        <div className='button-sm-1 text-sm my-1'
                                         onClick={()=>handleView(ele.comments, ele.employeeName, ele.employeeID, "Asset Request")}>View  </div>
                                        </td>
                                        <td className="text-sm px-6 py-4">
                                        
                                        <div  className='button-sm-1 text-sm my-1' onClick={()=>handleClickOpen(ele._id, ele.userID, ele.employeeName)}>
                                                                                        Asign an Asset </div>
                                        <div className='button-sm-2 text-sm my-1' onClick={()=>handleDecline(ele._id)}>Decline</div>
                                        </td>
                        
                                    </tr>
                                    )
                                })}
                               
    
                        
                            </tbody>
                        </table> :<div className='flex justify-center'> <p>No data</p> </div> }
                    </div>
        </div>
        <NavBar />
        </>
    )
}

export default AssetsReq
