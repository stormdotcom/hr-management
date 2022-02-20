import React, { useState, useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import "./styles.css";
import { Link } from "react-router-dom";
import { Alert, CircularProgress } from "@mui/material";
import { RiUpload2Fill } from "react-icons/ri"
import { useFormik } from "formik";
import { createEvent } from "../../../api/api";
import Swal from 'sweetalert2'
function AddEvents() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      createEvent(values)
        .then((res) => {
          setLoading(false);
          setError(false);
          Swal.fire({
            title: 'Success!',
            text: 'Event Updated Successfully',
            icon: 'Success',
            confirmButtonText: 'OK'
          })
        })
        .catch((err) => setError(err.response.data.message));
    } catch (error) {
      setError(error.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      start: "",
      end: "",
      title: "",
      type: "",
      time: "",
      description: "",
    },
    onSubmit: (values, {  resetForm }) => {
      handleSubmit(values);
      resetForm()
    },
    validate: (values) => {
      let error = {};
      if (!values.start) {
        error.start = "*Required";
      }
      if (!values.end) {
        error.end = "*Required";
      }
      if (!values.title) {
        error.title = "*Required";
      }
      if (!values.description) {
        error.description = "*Discription Required";
      }
      if (!values.type) {
        error.type = "*Required";
      }
      return error;
    },
  });
  const inputFile = useRef(null)
  const handleClick = () => {
    inputFile.current.click();
  }

  return (
    <>
      <div className="separation">
        <nav className="rounded-md w-full">
          <ol className="list-reset flex">
            <li>
              <Link to="/management">Management </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-500">Events</li>
          </ol>
        </nav>
        <div className="separationStatus">
          <h5 className="mt-4 mb-2 text-center pt-4 font-semibold">
            Create Events
          </h5>
          {error && <div className="flex justify-center "><Alert  severity="error">{error}!</Alert></div>}
          <div className="">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between align-middle rounded px-11 pt-6 mb-2">
                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Start Date</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="date"
                    name="start"
                    onChange={formik.handleChange}
                    value={formik.values.start}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.start && formik.errors.start ? <small className='error'> {formik.errors.start} </small> : null}
                </div>

                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > End Date</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="date"
                    name="end"
                    onChange={formik.handleChange}
                    value={formik.values.end}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.end && formik.errors.end ? <small className='error'> {formik.errors.end} </small> : null}
                </div>
                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Time</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="time"
                    name="time"
                  />
                </div>

                <div className="mb-1 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Type</label>
                  <select
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    onBlur={formik.handleBlur}
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    name="type">
                    <option value="event">Event</option>
                    <option value="other">Other</option>
                  </select>
                  {formik.touched.type && formik.errors.type ? <small className='error'> {formik.errors.type} </small> : null}
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="px-9 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Title</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? <small className='error'> {formik.errors.title} </small> : null}
                </div>

                <div className="px-9 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-medium text-gray-700" > Description</label>
                  <textarea
                    className="w-full px-3 py-2 text-sm leading-tight  bg-gray-200 border rounded   focus:outline-none focus:shadow-outline"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    cols={3}
                    rows={5}
                  ></textarea>
                  {formik.touched.description && formik.errors.description ? <small className='error'> {formik.errors.description} </small> : null}
                </div>
                <div className="px-9 mb-4 md:mr-2 md:mb-0 bg-gray-200">
                  <label className="block mb-2 text-sm font-medium text-gray-700" >
                    Upload Event Image <small>(300px height 1080px width)</small>
                  </label>
                  <div onClick={handleClick}
                    className="w-full px-12 py-3 skillUpload"
                  > <RiUpload2Fill className='mx-auto text-4xl text-fourth' />
                    <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                  </div>
                </div>
              </div>
              <div className="px-9 items-center justify-center ">
                {isLoading && (
                  <div className="flex justify-center items-center">
                    <CircularProgress color="info" size={20} />
                    <small className="px-1">Updating</small>
                  </div>
                )}
                <button type="submit" className="button-1 w-full my-2 mb-2">
                  Post Event
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default AddEvents;
