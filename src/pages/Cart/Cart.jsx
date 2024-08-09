import React, { useState } from "react";
import { useContext,  } from "react";
import "./Cart.css";
import CartItems from "../../components/CartItems/CartItems";
import { ProductContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartDispatch, total, quant } = useContext(ProductContext);

  return (
    <div className="Cart-Container">
      <div className="Cart-Info">
        <div>Total: ${total}</div>
        <div className="CartClear" onClick={() => cartDispatch({ type: "clear" })}>Clear Cart</div>
        <Link to="/CheckOut"><div className="CartClear" >Pay</div></Link>
        <div>Total Items: {cart.length}</div>
        <div>Total Quantity: {quant}</div>
      </div>
      <div className="CartHolder">
        {cart.map((e, i) => (
          <CartItems key={e.id} info={e} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
