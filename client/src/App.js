import SignIn from "./pages/SignIn/SignIn"
import Home from "./pages/Home/Home"
import Timesheet from "./pages/Timesheet/Timesheet"
import ErrorPage from "./pages/Error/Error"
import SelfService from "./pages/SelfService/SelfService"
import { Routes, Route } from "react-router-dom";
import Seperation from "./pages/SelfService/Separation/Separation"
import Transfer from "./pages/SelfService/Transfer/Transfer"
import ViewPaySlip from "./pages/SelfService/ViewPaySlip/ViewPaySlip"
import ProtectedRoute from "./routes/ProtectedRoutes/ProtectedRoute"



function App() {

  return (
    <>
    <Routes>
      {/* <Route path="/" element={isAuth ? <Navigate to="/home" /> : <SignIn /> } /> */}
      <Route path="/signin" element={ <SignIn /> } />
      <Route path="/*" element={<ErrorPage />} />
      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
       <Route exact path="/" element={<Home /> } />
       <Route exact path="/selfservice" element={<SelfService />} />
       <Route exact path="/selfservice/separation" element={<Seperation />} />
       <Route exact path="/selfservice/transfer" element={<Transfer />} />
       <Route exact path="/selfservice/viewslip" element={<ViewPaySlip />} />
       <Route exact path="/selfservice/vehicle" element={<Seperation />} />
       <Route exact path="/selfservice/assets" element={<Seperation />} />
       <Route exact path="/selfservice/project" element={<Seperation />} />
       <Route exact path="/timesheet" element={<Timesheet />} />
   
      </Route>

    </Routes>
    </>
  );
}

export default App;

// gik-xbda-hwu