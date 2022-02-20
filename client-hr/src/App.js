// Components
import {useEffect} from "react"
import HomeHR from "./pages/HomeHR/HomeHR"
import SignIn from "./pages/SignIn/SignIn"
import Timesheet from "./pages/Timesheet/Timesheet"
import ErrorPage from "./pages/Error/Error"
import Management from "./pages/Management/Management"
import AddEvents from "./pages/Management/AddEvents/AddEvents"
import Announcements from "./pages/Management/Announcements/Announcements"
import ManageReq from "./pages/Management/ManageReq/ManageReq"
import LeaveReq from "./pages/Management/ManageReq/LeaveReq"
import VehicleReq from "./pages/Management/ManageReq/VehicleReq"
import AssetsReq from "./pages/Management/ManageReq/AssetsReq"
import ViewPaySlip from "./pages/Management/ViewPaySlip/ViewPaySlip"
import LearningsReq from "./pages/Management/ManageReq/LearningsReq"
import ProtectedRoute from "./routes/ProtectedRoutes/ProtectedRoute"
import AddEmployee from "./pages/AddEmployee/AddEmployee"
import ViewEmployees from "./pages/ViewEmployees/ViewEmployees"
import ViewBySkills from "./pages/ViewEmployees/ViewBySkills"
import ViewManagers from "./pages/ViewEmployees/ViewManagers"
import ViewPerfomer from "./pages/ViewEmployees/ViewPerfomer"
import Profile from "./pages/Profile/Profile"
import EditProfile from "./pages/EditProfile/EditProfile"
import SkillsReq from "./pages/Management/ManageReq/SkillsReq"
import Seperation from "./pages/Management/ManageReq/Seperation"
import Transfer from "./pages/Management/ManageReq/Transfer"
import Transcations from "./pages/Transcations/Transcations"
import ChangePostion from "./pages/ViewEmployees/ChangePostion"
// APIs
import { fetchEmployeeData, fetchStats as fetchAllStats } from './api/api';
import { Routes, Route, useNavigate } from "react-router-dom";
import {Navigate} from "react-router-dom"
import { logout} from "./redux/login/loginSlice"
import { initial, fetchProfile, errorfetching, fetchStats, final} from "./redux/hr/hrSlice"
import {  useDispatch} from "react-redux"
import jwtDecode from "jwt-decode"
import ChangeProject from "./pages/ViewEmployees/ChangeProject"



function App() {
  let user = JSON.parse(localStorage.getItem('hr'))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {

    if (user?.token) {
       dispatch(initial())
        const decodedToken = jwtDecode(user.token)
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          dispatch(logout("Session Time Out"))
          navigate("/signin")
        };

        fetchEmployeeData(user.result._id)
        .then((res)=> dispatch(fetchProfile(res.data)))
        .catch(err=> dispatch(errorfetching(err.message)))

        fetchAllStats()
        .then((res)=> dispatch(fetchStats(res.data))) 
        .catch(err=> dispatch(errorfetching(err.message)))
    } 
    if(!user) {
      dispatch(final())
      dispatch(logout("Please Login again"))
      navigate("/signin")
    }
}, [ navigate, dispatch, user])

  return (
    <>
    <Routes>
      <Route exact path="/*" element={<ErrorPage />} />
      {/* <Route exact path="/signin" element={<SignIn />} /> */}
      <Route exact path="/signin" element={ user ? <Navigate to="/" /> :<SignIn />} />


      {/* Protected routes */}
      <Route  element= {<ProtectedRoute />}>
       <Route exact path="/" element={ <HomeHR /> } />
       <Route exact path="/management" element={<Management />} />
       <Route exact path="/management/addevents" element={<AddEvents />} />
       <Route exact path="/management/announcements" element={<Announcements />} />
       <Route exact path="/management/payment" element={<ViewPaySlip />} />
       <Route exact path="/management/all-requests" element={<ManageReq />} />
       <Route exact path="/management/all-requests/leave" element={<LeaveReq />} />
       <Route exact path="/management/all-requests/vehicle" element={<VehicleReq />} />
       <Route exact path="/management/all-requests/assets" element={<AssetsReq />} />
       <Route exact path="/management/all-requests/learnings" element={<LearningsReq />} />
       <Route exact path="/management/all-requests/skills" element={<SkillsReq />} />  
       <Route exact path="/management/all-requests/seperation" element={<Seperation />} />  
       <Route exact path="/management/all-requests/transfer" element={<Transfer />} />  
       <Route exact path="/view-employees" element={<ViewEmployees />} />
       <Route exact path="/view-employees/view-skills" element={<ViewBySkills />} />
       <Route exact path="/view-employees/managers" element={<ViewManagers />} />
       <Route exact path="/view-employees/performer" element={<ViewPerfomer />} />
       <Route exact path="/view-employees/:id" element={<Profile />} />
       <Route exact path="/edit-employees/:id" element={<EditProfile />} />
       <Route exact path="/change-position/:id" element={<ChangePostion />} />
       <Route exact path="/change-project/:id" element={<ChangeProject />} />
       <Route exact path="/transactions" element={<Transcations />} />
       <Route exact path="/timesheet" element={<Timesheet />} />
       <Route exact path="/add-employee" element={<AddEmployee />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

