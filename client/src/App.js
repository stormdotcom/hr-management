// Components
import {useEffect} from "react"
import SignIn from "./pages/SignIn/SignIn"
import Home from "./pages/Home/Home"
import Timesheet from "./pages/Timesheet/Timesheet"
import ErrorPage from "./pages/Error/Error"
import SelfService from "./pages/SelfService/SelfService"
import Seperation from "./pages/SelfService/Separation/Separation"
import Transfer from "./pages/SelfService/Transfer/Transfer"
import Cab from "./pages/SelfService/Cab/Cab"
import ManageReq from "./pages/SelfService/ManageReq/ManageReq"
import LeaveReq from "./pages/SelfService/ManageReq/LeaveReq"
import VehicleReq from "./pages/SelfService/ManageReq/VehicleReq"
import AssetsReq from "./pages/SelfService/ManageReq/AssetsReq"
import ViewPaySlip from "./pages/SelfService/ViewPaySlip/ViewPaySlip"
import Assets from "./pages/SelfService/Assets/Assets"
import Leave from "./pages/LeaveReq/Leave"
import RaiseIssue from "./pages/RaiseIssue/RaiseIssue"
import ProtectedRoute from "./routes/ProtectedRoutes/ProtectedRoute"
import FunctionRoute from "./routes/FunctionRoute/FunctionRoute"
import Learnings from "./pages/Learnings/Learnings"
import SkillSets from "./pages/SkillSets/SkillSets"
import Performance from "./pages/Performance/Performance"
import LearningsReq from "./pages/SelfService/ManageReq/LearningsReq"
import RaisedIssue from "./pages/SelfService/ManageReq/RaisedIssue"
import Profile from "./pages/Profile/Profile"

// APIs

import { fetchEmployeeData, getNotification } from './api/employee';
import { Routes, Route, useNavigate } from "react-router-dom";
import {Navigate} from "react-router-dom"
import { logout} from "./redux/login/loginSlice"
import { initial, fetchProfile, errorfetching, final} from "./redux/employee/employeeSlice"
import { fetchNotification } from "./redux/notifications/notificationSlice"
import {  useDispatch} from "react-redux"
import jwtDecode from "jwt-decode"
import ManagerRoute from "./routes/ManagerRoute/ManagerRoute"


function App() {
  let user = JSON.parse(localStorage.getItem('employee'))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.token) {
        const decodedToken = jwtDecode(user.token)
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          dispatch(final())
          dispatch(logout("Session Time Out"))
          navigate("/signin")
        }
          dispatch(initial())
        fetchEmployeeData(user.result._id)
        .then((res)=> dispatch(fetchProfile(res.data)))
        .catch(err=> dispatch(errorfetching(err.message)))

        getNotification(user.result._id)
        .then((res)=> dispatch(fetchNotification(res.data)))
        .catch(err=> dispatch(errorfetching(err.message)))

 
    } 

}, [navigate])

  return (
    <>
    <Routes>
      <Route exact path="/*" element={<ErrorPage />} />
      <Route exact path="/signin" element={ user ? <Navigate to="/" /> :<SignIn />} />


      {/* Protected routes */}
      <Route  element= {<ProtectedRoute />}>
       <Route exact path="/" element={ <Home /> } />
       <Route exact path="/profile" element={ <Profile /> } />
       <Route element={<FunctionRoute/>} >
       <Route exact path="/selfservice" element={<SelfService />} />
       <Route exact path="/selfservice/separation" element={<Seperation />} />
       <Route exact path="/selfservice/transfer" element={<Transfer />} />
       <Route exact path="/selfservice/viewslip" element={<ViewPaySlip />} />
       <Route exact path="/selfservice/vehicle" element={<Cab />} />
       <Route exact path="/selfservice/assets" element={<Assets />} />
      <Route element ={<ManagerRoute />}>
      <Route exact path="/selfservice/all-requests" element={<ManageReq />} />
       <Route exact path="/selfservice/all-requests/leave" element={<LeaveReq />} />
       <Route exact path="/selfservice/all-requests/vehicle" element={<VehicleReq />} />
       <Route exact path="/selfservice/all-requests/assets" element={<AssetsReq />} />
       <Route exact path="/selfservice/all-requests/learnings" element={<LearningsReq />} />
       <Route exact path="/selfservice/all-requests/tickets" element={<RaisedIssue />} />
      </Route>
       <Route exact path="/timesheet" element={<Timesheet />} />
       <Route exact path="/leave" element={<Leave />} />
       <Route exact path="/tickets" element={<RaiseIssue />} />
       <Route exact path="/learnings" element={<Learnings />} />
       <Route exact path="/skillsets" element={<SkillSets />} />
       <Route exact path="/performance" element={<Performance />} />

       </Route>

      </Route>
    </Routes>
    </>
  );
}

export default App;

