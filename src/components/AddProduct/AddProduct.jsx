import React, { useState, useRef } from "react";
import { path } from "ramda";
import { Link } from "react-router-dom";

function AddProduct(props) {
  const [successModal, setSuccessModal] = useState(false);
  const fileRef = useRef(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const payload = {
      name,
      price,
      imgUrl: productImage,
      id: new Date().getTime(),
    };
    props.addProduct(payload).then((res) => {
      // successfully added data //
      setSuccessModal(true);
      setName("");
      setPrice("");
      setProductImage(null);
      fileRef.current.value = null;
    });
  }

  function fileChangedHandler(event) {
    event.preventDefault();
    if (!path(["target", "files", 0], event)) {
      return false;
    }

    let file = event.target.files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setProductImage(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  return (
    <div className="home-content main-content">
      <div className="container">
        <div className="head">
          <h1>Add Product</h1>
        </div>
        <div className="search-bar">
          <form onSubmit={onSubmit} className="add-product-form">
            <input
              required
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              placeholder="Enter Product Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              ref={fileRef}
              required
              onChange={fileChangedHandler}
              type="file"
              accept="image/png, image/jpeg"
            />
            <button className="button" type="submit">
              Submit
            </button>
            {successModal && (
              <>
                <span className="success">Product added successfully.</span>
                <Link className="button" to="/">
                  Home{" "}
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
