import React from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

function Product(props) {
  return (
    <li>
      <div className="content">
        <IoIosClose
          onClick={() => props.deleteProduct(props.item.id)}
          className="icon"
        />
        <div className="thumb">
          <Link to={`/product/` + props.item.id}>
            <img alt="my-product" src={props.item.imgUrl} />
          </Link>
        </div>
        <div className="desc">
          <Link to={`/product/` + props.item.id}>
            <strong>{props.item.name}</strong>
          </Link>
          <p>Best in class. Product description</p>
          <span>₹ {props.item.price} </span>
        </div>
      </div>
    </li>
  );
}

export default Product;
