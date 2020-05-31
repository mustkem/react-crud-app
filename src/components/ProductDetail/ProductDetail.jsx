import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const [titleModal, setTitleModal] = useState(false);
  const [title, setTitle] = useState("");

  const params = useParams();
  useEffect(() => {
    props.getProductDetail(params.id);
  }, []);

  useEffect(() => {
    setTitle(props.productDetail.name);
  }, [props.productDetail]);

  if (!props.productDetail) return null;

  function updateProduct() {
    props
      .updateProduct(props.productDetail.id, {
        ...props.productDetail,
        name: title,
      })
      .then((res) => {
        setTitleModal(false);
      });
  }

  return (
    <div className="home-content main-content">
      <div className="container">
        <h1>Product Detail</h1>

        <div className="product-card">
          <div className="button-wrap">
            {titleModal && (
              <>
                <button onClick={updateProduct} className="button abs">
                  Save
                </button>
                <button
                  onClick={() => setTitleModal(!titleModal)}
                  className="button abs"
                >
                  Cancel
                </button>
              </>
            )}
            {!titleModal && (
              <button
                onClick={() => setTitleModal(!titleModal)}
                className="button abs"
              >
                Update
              </button>
            )}
          </div>
          <div className="thumb">
            <img alt="my-product" src={props.productDetail.imgUrl} />
          </div>
          <div className="desc">
            {titleModal && (
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            )}
            {!titleModal && <strong>{props.productDetail.name}</strong>}

            <p>Best in class. Product description</p>
            <span>₹ {props.productDetail.price} </span>
            <strong>Specifications:</strong>
            <p>-100% cotton</p>
            <p>-Slim fit</p>
            <p>-Slim fit</p>
            <p>-6 months warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
