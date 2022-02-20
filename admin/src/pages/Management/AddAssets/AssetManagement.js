import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/NavBar/NavBar"
import NameCard from '../../../components/NameCard/NameCard';
import {getAllAssetsHolding, getAllAssets} from "../../../api/api"
import {Alert} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import {  fetchAllAssets } from '../../../redux/requests/requestSlice';
import EditAssets from "../../Management/AddAssets/EditAssets"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import "./styles.css"
function AssetManagement() {
    const navigate = useNavigate
    const dispatch = useDispatch()
    const [holdingAssets, setholdingAssets] = useState([])
    const [err, seterr] = useState(null)
    const [CurrentAsset, setCurrentAsset]= useState(null)
    const {allAssets} = useSelector(state=> state.requests)

    useEffect(() => {
        getAllAssetsHolding().then(res=> setholdingAssets(res.data))
        .catch(err=> seterr(err.message))  
        
        getAllAssets().then((res)=>dispatch(fetchAllAssets(res.data)))
        .catch((err)=>{console.log(err.message)})

        return () => {
          dispatch(fetchAllAssets([]))
      };   
        
      }, [navigate, dispatch]);
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = (data) => {
        setOpen(true);
        setCurrentAsset(data)
      };
    
      const handleClose = () => {
        setOpen(false);
        setCurrentAsset(null)
      };

  return <>
        <div className='separation '>
            <div className=' mx-auto'> 
            {err &&  <div className='flex'><Alert severity="error"></Alert> </div>}
           
            <h6 className='font-semibold mt-3  text-center'> Available Assets</h6> 
            {allAssets.length ? 
            <div className='flex px-10 py-3 justify-center flex-wrap'>
               {allAssets.map((ele, i)=>{
                   return (
                       <div onClick={()=>handleClickOpen(ele)}>
                    <NameCard 
                    secondName={ele.assetName}
                    desigination={ele?.assetCategory} 
                    secondCode={ele.assetCode}
                    key={i} 
                    cardID={ele.userID} 
                    type={true}/>
                    </div>
                   )
               })}
                
               </div> : <div> <p>No Assets Available</p> </div>  }

               <h6 className='font-semibold mt-3 text-center'> Allocated Assets</h6> 
               {holdingAssets.length ? 
            <div className='flex px-10 py-3 justify-center flex-wrap mb-5'>
               {holdingAssets.map((ele, i)=>{
                   return (<div className=' '> 
                    <NameCard 
                    fullname={`Allocted to: ${ele?.allocated?.fullname}`} 
                    empID={ele.allocated?.empID} 
                    secondName={ele.assetName}
                    desigination={ele?.assetCategory} 
                    secondCode={ele.assetCode}
                    key={i} 
                    cardID={ele.userID} 
                    type={true}
                    button={true}
                    assetId={ele._id}/>
                    </div>
                   )
               })}
               </div>
               : <div className='flex justify-center'> <p>No Assets</p> </div> }
            </div>
         
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogContent>
               <EditAssets data={CurrentAsset} setOpen={setOpen} fetchAllAssets={fetchAllAssets} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <NavBar />
  </>;
}

export default AssetManagement;