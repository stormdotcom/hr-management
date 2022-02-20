import React, {useState} from 'react'
import "./styles.css"
import { useFormik } from 'formik';
import { updateAsset } from '../../../api/api';
import {  CircularProgress, Alert } from "@mui/material";
import { getAllAssets} from "../../../api/api"
import { useDispatch } from 'react-redux'
import {  fetchAllAssets } from '../../../redux/requests/requestSlice';
import Swal from 'sweetalert2'
function EditAssets({data, setOpen}) {

  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const handleSubmit =async (values)=>{
    try { 
        setLoading(true)
        updateAsset(values).then((res)=> {
        setLoading(false)
        setError(false)
        Swal.fire({
            title: 'Success!',
            text: 'Updated  Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          setOpen(false)
          getAllAssets().then((res)=>dispatch(fetchAllAssets(res.data)))
          .catch((err)=>{console.log(err.message)})
      }).catch(error=> setError(error.response.data.message))

    } catch (error) { 
        setError(error.response.data.message)
      
    }
  }

  const formik = useFormik({
    initialValues: {
        assetName: data?.assetName,
        assetModel: data?.assetModel,
        assetCategory: data?.assetCategory,
        assetType: data?.assetType,
        description:data?.description,
        assetCode:data?.assetCode,
        id:data?._id
      },
    onSubmit: (values, {  resetForm } )=> { 
      handleSubmit(values)
      resetForm()

    },
    // validationSchema:(schema),
    validate: values=>{
      let error={}
      if (!values.assetName) {
        error.assetName = "*Required";
      }
      if (!values.assetModel) {
        error.assetModel = "*Required";
      }
      if (!values.assetCategory) {
        error.assetCategory = "*Required";
      }
      if (!values.assetType) {
        error.assetType = "*Required";
      }
      return error
    }
  })
    return (


          <div className='separationStatus'>
              <Alert severity='info'>{error}</Alert>
       <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between align-middle rounded px-11 pt-6 mb-2">
              <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Asset ID</label>
                  <p
                    className="px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                  > {formik.values.assetCode}</p> 
                </div>
                
                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Asset Name</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="text"
                    name="assetName"
                    onChange={formik.handleChange}
                    value={formik.values.assetName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.assetName && formik.errors.assetName ? <small className='error'> {formik.errors.assetName} </small> : null}
                </div>

                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Asset Model</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="text"
                    name="assetModel"
                    onChange={formik.handleChange}
                    value={formik.values.assetModel}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.assetModel && formik.errors.assetModel ? <small className='error'> {formik.errors.assetModel} </small> : null}
                </div>
                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Category</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="text"
                    name="assetCategory"
                    onChange={formik.handleChange}
                    value={formik.values.assetCategory}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.assetCategory && formik.errors.assetCategory ? <small className='error'> {formik.errors.assetCategory} </small> : null}
                </div>
 
              </div>
              <div className="flex flex-col mb-4">
                <div className="px-9 md:mr-2 md:mb-0 mb-2">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Asset Type</label>
                  <select
                    onChange={formik.handleChange}
                    value={formik.values.assetType}
                    onBlur={formik.handleBlur}
                    className="px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    name="assetType">
                    <option defaultValue={true} value="Computers">Computers</option>
                    <option value="other">Other</option>
                  </select>
                  {formik.touched.assetType && formik.errors.assetType ? <small className='error'> {formik.errors.assetType} </small> : null}
                </div>
        
                <div className="px-9 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Description</label>
                  <textarea
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    cols={3}
                    rows={5}
                  ></textarea>
                </div>

                {/* <div className="px-9 mb-4 md:mr-2 md:mb-0 bg-gray-200">
                  <label className="block mb-2 text-sm font-medium text-gray-700" >
                    Upload Event Image <small>(300px height 1080px width)</small>
                  </label>
                  <div onClick={handleClick}
                    className="w-full px-12 py-3 skillUpload"
                  > <RiUpload2Fill className='mx-auto text-4xl text-fourth' />
                    <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                  </div>
                </div> */}
              </div>
              <div className="px-9 items-center justify-center ">
                {loading && (
                  <div className="flex justify-center items-center">
                    <CircularProgress color="info" size={20} />
                    <small className="px-1">....</small>
                  </div>
                )}
                <button type="submit" className="button-1 w-full my-2 mb-2">
                  Update Asset
                </button>
              </div>

            </form>
        </div>
    );
}

export default EditAssets
