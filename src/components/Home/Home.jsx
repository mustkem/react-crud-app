import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import { Link } from "react-router-dom";

function Home(props) {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    props.getProducts();
  }, []);

  function filterProducts() {
    let items = [];
    props.products &&
      props.products.forEach((item) => {
        const name = item.name && item.name.toLowerCase();
        let searchStringLowerCase = searchString.toLowerCase();
        if (name && name.includes(searchStringLowerCase)) {
          items.push(item);
        }
      });

    return items;
  }
  return (
    <div className="home-content main-content">
      <div className="container">
        <div className="head">
          <h1>Products</h1>
          <Link className="button" to="/add-product">
            Add Product
          </Link>
        </div>

        <div className="search-bar">
          <input
            placeholder="Search products"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
        <ul className="products">
          {filterProducts().map((item, index) => (
            <Product key={index} item={item} {...props} />
          ))}
        </ul>
        {filterProducts().length === 0 && <div> No record found </div>}
      </div>
    </div>
  );
}

export default Home;
