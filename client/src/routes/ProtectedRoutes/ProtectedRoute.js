import { Navigate, Outlet } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
 const Auth =()=>{
    const user = { loggedin: true}
    return user && user.loggedin;
}

const ProtectedRoute = ()=>{
    const isAuth = Auth()
    return isAuth ? <Outlet /> : <SignIn/>
}

export default ProtectedRoute;
