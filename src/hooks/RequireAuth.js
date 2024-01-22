import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./AuthProvider";

const RequireAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()
    
    return (
        <>
        {console.log("isLoggedIn? ", auth)}
            {
                auth.isLoggedIn
                    ? <Outlet />
                    : <Navigate to='/login' state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth