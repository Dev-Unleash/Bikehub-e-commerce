import React, { useState } from "react";
import "./CartItems.css";
// import download from "../../assets/download.jpeg";
import { ProductContext } from "../../context/ContextProvider"
import { useContext } from "react";

const CartItems = ({info}) => {
    const {cartDispatch} = useContext(ProductContext)
  return (
    <div className="CartItemContainer">
    <div className="CartItemImage">
        <img src={info.image} alt="sale"/>
    </div>
    <div className="CartDetails">
        <h4>{info.name}</h4>
        <p>{info.description}</p>
        <div className="CartItemsInfo">
            <p>${info.price}</p>
            <button className="CartItemDelete" onClick={()=> cartDispatch({type: "delete", payload: info.id})}>Delete</button>
            <div className="CartActions">
                <button disabled={info.QTY === 1} onClick={()=> cartDispatch({type: "decrease", payload: info})}>-</button>
                <p>{info.QTY}</p>
                <button onClick={()=> cartDispatch({type: "increase", payload: info})}>+</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItems
