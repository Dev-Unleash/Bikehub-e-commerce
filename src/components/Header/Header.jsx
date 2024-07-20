import "./Header.css";
import { CgMenuGridR } from "react-icons/cg";
import { RiMotorbikeFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiTowTruck } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import UserDrop from "../UserDrop/UserDrop";
import React, { useState } from 'react'
import { ProductContext } from "../../context/ContextProvider";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    // const { cart } = useContext(ProductContext)
    const [userDrop, setUserDrop] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {cart, total} = useContext(ProductContext);
   

    return (
        <div className="Header-Container">
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
                <section className="Header-Logo">
                    <div className="Header-Logo-Item">< RiMotorbikeFill /></div>
                    <div style={{ cursor: "pointer", fontSize: "33px", textAlign: "center",   color: "rgb(5, 5, 57)" }}>Bikehub</div>
                </section>
            </NavLink>
            <section className="Header-Navs">
                <NavLink to="/" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>Home</NavLink>
                <NavLink to="/categories" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>Categories</NavLink>
                <NavLink to="/post" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>Post</NavLink>
                <input className="search" type="text" placeholder="search" />< CiSearch className="searchIcon" />
            </section>
            <section>
                <div className="Header-Cart" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5px", gap: "30px" }}>
              
                    <Link to="/Cart">
                        <GiTowTruck style={{ paddingTop: "5px" }} />
                        <div>{cart.length}</div>
                    </Link>
                   
                        <div className='UserContainer'>
                            <FaRegUserCircle className='Icon' onClick={() => setUserDrop(!userDrop)} />
                           
                            <div className="UserDropContainer">
                                {userDrop && <UserDrop />}
                            </div>
                        
                        </div>
                    
                </div>

                <div className="Header-Burger">
                    <CgMenuGridR />
                </div>
            </section>
        </div>
    )
}

export default Header