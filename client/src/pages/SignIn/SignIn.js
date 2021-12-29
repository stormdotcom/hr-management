import React from 'react'
import "./styles.css"
import {FaUserAlt} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri"
import Stack from "../../components/NavBar/Stack-logo.svg";
import {Link } from "react-router-dom"
import { useFormik } from 'formik';
function SignIn() {
  const formik = useFormik({
    initialValues:{
      username:"",
      password:""
    },
    onSubmit: values=> {
      console.log(values)

    },
    validate: values=>{
      let error={}
      if(!values.username) {
        error.username="*Username Required"
      }
      if(!values.password) {
        error.password="* Password Required"
      }
      return error
    }
   

  })
    return (
      <div className='signin'>
        <form onSubmit={formik.handleSubmit}>
        <div className="form bg-white align-middle rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <small className='font-thin metal m-auto '>Human Resouce Stack</small>           
         <div className='logoSec mt-2'>
                
            <h5> HR </h5>
                <img  alt="logo"  height="20px" src={Stack} /> 
            </div>
            <div className='mb-4'>
            <div className=" shadow appearance-none border rounded w-full py-2 pl-1 flex">
              <FaUserAlt className='mx-2' />
            <input
              className=""
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
              id="username"
              name="username"
              type="text"
              placeholder="Username"
            />
           
          </div>
          {formik.touched.username && formik.errors.username  ? <small className='ml-1 error'> {formik.errors.username} </small> : null}
            </div>
        
          <div className="mb-6">
          <div className="shadow appearance-none border rounded w-full py-2 pl-1 flex">
          <RiLockPasswordFill className='mx-2' />
            <input
              className=""
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          {formik.touched.password && formik.errors.password ? <small className='error'> {formik.errors.password} </small> : null}
           
          </div>
          <div className=" items-center justify-center">
            <button type='submit' className="button-1 w-full my-2">
              Sign In
            </button>
            <Link className="inline-block  align-baseline font-light text-sm text-blue hover:text-blue-darker" to="/forget-password"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        </form>
       
      </div>
    );
}

export default SignIn
