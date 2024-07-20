import {Outlet}from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout=()=>{
    return(
        <div className="AuthMain">
           
            <Outlet />
           
        </div>
        
    )
}

export default AuthLayout