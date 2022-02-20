import React, {useState} from 'react'
import "./styles.css"
import {Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import { LinearProgress  } from '@mui/material';
import Alert from '@mui/material/Alert';
import { addEmployee } from '../../api/api';
import NavBar from '../../components/NavBar/NavBar';
import * as yup from "yup";
import Swal from 'sweetalert2'
function AddEmployee() {

  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit =async (values)=>{
    try { 
        setLoading(true)
      addEmployee(values).then((res)=> {
        setLoading(false)
        setError(false)
        Swal.fire({
            title: 'Success!',
            text: 'Created  Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        
      }).catch(error=> setError(error.response.data.message))

    } catch (error) { 
        setError(error.response.data.message)
      
    }
  }
  const schema = yup.object({
    password: yup
      .string()
      .required('Please Enter your password')
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{5,}$",
        "*Must Contain 5 Characters \n, *One Uppercase, \n *One Lowercase, \n *One Number and one special case Character"
      ),
    repassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  });
  const formik = useFormik({
    initialValues:{
      email:"",
      fullname:"",
      password:"",
      repassword:""
    },
    onSubmit: (values, {  resetForm } )=> { 
      console.log(values)
      handleSubmit(values)
      resetForm()

    },
    // validationSchema:(schema),
    validate: values=>{
      let error={}
      if(!values.email) {
        error.email="*Email Required"
      }
      if(!values.fullname) {
        error.fullname="*Fullname Required"
      }
      if(!values.password) {
        error.password="*Password Required"
      }
      if(!values.repassword) {
        error.repassword="*Required"
      }
      return error
    }
  })
    return (
        <div>
      <div className='separation'>
          <div className='separationStatus'>
        <form onSubmit={formik.handleSubmit}>
        <div className=" bg-grey align-middle rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h5 className='font-semibold metal m-auto pb-2'>Add Employee</h5>           
            <div className='mb-4'>
              {error &&    <div className='flex justify-center'> <Alert severity="error">{error}!</Alert></div> }
            <div className="py-2 pl-1 flex ">
            <input
              className="w-full px-1 py-2"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
           
          </div>

          {formik.touched.email && formik.errors.email  ? <small className='ml-1 error'> {formik.errors.email} </small> : null}
            </div>
            <div className='mb-4'>
            <div className="py-2 pl-1 flex">
            <input
              className="w-full px-1 py-2"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              onBlur={formik.handleBlur}
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Full Name"
            />
           
          </div>

          {formik.touched.fullname && formik.errors.fullname  ? <small className='ml-1 error'> {formik.errors.fullname} </small> : null}
            </div>
        <div className='flex justify-between'> 

          <div className="mb-6  w-2/5">
          <div className="w-full py-2 pl-1 flex flex-col addEmployee">
            <input
              className="w-full px-1 py-2"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
             {formik.touched.password && formik.errors.password ? <small className='error'> {formik.errors.password} </small> : null}
          </div>
           
          </div>
          <div className="mb-6 w-2/5">
          <div className="w-full py-2 pl-1 flex flex-col">
            <input
              className="w-full px-1 py-2"
              onChange={formik.handleChange}
              value={formik.values.repassword}
              onBlur={formik.handleBlur}
              name="repassword"
              id="repassword"
              type="repassword"
              placeholder="ReType Password"
            />
                 {formik.touched.repassword && formik.errors.repassword ? <small className='error'> {formik.errors.repassword} </small> : null}
          </div>
         
           
          </div>
          </div>
          <div className=" items-center justify-center">
          {!error && loading && <div className='flex flex-col justify-center items-center'><LinearProgress  color="info"   /> <small className='px-1'>Creating...</small> </div> }
            <button type='submit' className="button-1 w-full my-2"> 
              Create
            </button>
          </div>
        </div>
        </form>
        </div>
       
      </div>
      <NavBar />
      </div>
    );
}

export default AddEmployee
