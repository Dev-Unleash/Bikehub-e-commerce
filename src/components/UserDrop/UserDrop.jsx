import React from 'react'
import "./UserDrop.css"
import { Link, useNavigate } from "react-router-dom";
// import { handleSignUpClick } from '../Login&Signup/Login&SignUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";

const UserDrop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const checkIfLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  useEffect(()=>{
    if(checkIfLoggedIn === false){
        navigate("/auth/login")
    }
},[checkIfLoggedIn])
  return (
    <div className='DropBoxContainer'>
      {/* <Link to="/auth/login">
        <h6>Login</h6>
      </Link>
      <Link to="/auth/login" onClick={handleSignUpClick}>
        <h6>Signup</h6>
      </Link> */}
      <h6 onClick={()=>dispatch(logOut())}>LogOut</h6>
    </div>
  )
}

export default UserDrop