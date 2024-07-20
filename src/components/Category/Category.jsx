import "./Category.css";
// import download2 from "../../assets/download2.jpeg"
import { Link } from "react-router-dom";

const Category = ({vals}) => {
  return (
    <Link to={`/category/1`} className="Category-Holder">
        <div className="Category-Left">
           {vals.cat}
        </div>
        <div className="Category-Right">
            <img src={vals.img} alt="Category" style={{height:"50%"}}/>
        </div>
    </Link>
  )
}

export default Category