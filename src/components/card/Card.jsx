import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { GiTowTruck } from "react-icons/gi";
import { RiApps2Fill } from "react-icons/ri";
import { useContext } from "react";
import { ProductContext } from "../../context/ContextProvider";

const Card = ({ info }) => {
  const { cartDispatch } = useContext(ProductContext);

  const addToCart = () => {
    cartDispatch({ type: "addToCart", payload: info })
  }

  return (
    <div className="Card-Container" key={info.id}>
      <div className="Card-Items">
        <div className="Card-Top">
          <Link to={`/detail/${info.id}`} className="Card-Circle">
            <RiApps2Fill style={{ color: "blue" }} />
          </Link>
          <div
            className="Card-Circle"
            style={{ fontSize: "25px", color: "darkPurple" }}
            onClick={addToCart}
          >
            <GiTowTruck />
          </div>
        </div>
        <div className="Card-Image">
          <img src={info.image} alt="id" />
        </div>
        <div className="Card-Details">
          <h4 style={{ color: "black", fontSize: "25px" }}>{info.name}</h4>
          <p>${info.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
