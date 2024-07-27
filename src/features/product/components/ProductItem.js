import React from "react";

const ProductItem = ({ product, RouterChange }) => {
  var src = product.thumbnail;
  if (product.thumbnail.slice(0,6)=='image_') {
    const _path = "https://urban-cart-backend.vercel.app/images/";
     src = _path + product.thumbnail;
  }
  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-6 my-4">
        <div className="card m-md-2 m-0 product-item">
          <span
            className="position-absolute fs-7 fw-light badge bg-danger"
            style={{ top: "8px", left: "7px" }}
          >
            -{Math.round(product.discountPercentage)}%
          </span>
          <img
            src={src}
            className="img-fluid "
            onClick={() => RouterChange()}
            alt="img"
            style={{height:"200px"}}
          />
          <div className="px-2" onClick={() => RouterChange()}>
            <h5 className="card-title pt-2">
              {product.title}
            </h5>
            <div className="container  product-item-bottom mb-2">
              <div className="d-flex justify-content-between">
                <div>

            <span className="text-danger">
              $ {Math.round(
                product.price - (product.price * product.discountPercentage / 100)
              )}
            </span>
            <span className="text-decoration-line-through text-secondary ms-2">
              $ {product.price}
            </span>
              </div>
            <div className="">
              <i className="fa-regular fa-star"></i>
              <span className="ms-1">{product.rating}</span>
            </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
