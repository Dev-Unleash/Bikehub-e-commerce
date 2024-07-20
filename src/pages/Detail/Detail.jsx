import "./Detail.css";
import {useParams} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ContextProvider";

const Detail = () => {
    const {id}= useParams();
    const {products, cartDispatch} = useContext(ProductContext);
    const [product, setProduct]= useState({})

    const addToCart=()=>{
        cartDispatch({type: "addToCart", payload: product})
    }

    useEffect(()=>{
        const item = products.filter((e)=> e.id == id);
        setProduct(item[0])
    },[])
  return (
    <div className="Detail-Container">
        <div className="Detail-Content">
            <div className="Detail-Left">
                <h4>{product.name}</h4>
                <div>{product.description}</div>
            </div>
            <div className="Detail-Center">
                <img src={product.image} alt="id"/>
                <h4 style={{fontSize: "30px"}}>${product.price}</h4>
            </div>
            <div className="Detail-Right">
                <div onClick={addToCart} style={{cursor: "pointer"}}>Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Detail