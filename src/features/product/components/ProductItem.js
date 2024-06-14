import React from "react";

const ProductItem = ({ product, handleClick, RouterChange }) => {
  var src = product.thumbnail;
  if (product.thumbnail.slice(0,6)=='image_') {
    const _path = "http://localhost:5000/images/";
     src = _path + product.thumbnail;
  }
  return (
    <>
      <div className="col-md-3 col-sm-3 my-4">
        <div className="card m-md-4 m-0 abc" style={{ width: "18rem" }}>
          <span
            className="position-absolute fs-7 fw-light badge bg-danger"
            style={{ top: "8px", left: "7px" }}
          >
            -{Math.ceil(product.discountPercentage)}%
          </span>
          <span
            onClick={(e) => {
              handleClick(e);
            }}
            className="position-absolute text-center"
            style={{
              right: "10px",
              top: "8px",
              height: "30px",
              width: "30px",
              borderRadius: "30px",
              backgroundColor: "white",
              lineHeight: "30px",
            }}
          >
            <i
              role="button"
              className="fa-regular fa-heart fa-lg"
              style={{ color: "black" }}
            ></i>
          </span>
          <img
            src={src}
            className="img-home card-img-top"
            onClick={() => RouterChange()}
            alt="img"
            style={{ height: "200px" }}
          />
          <div className="card-body" onClick={() => RouterChange()}>
            <h5 className="card-title">
              {product.title.split(" ").slice(0, 3).join(" ")}
            </h5>
            <p className="card-text">{product.description.slice(0, 50)}...</p>
            <span className="text-danger">
              $ {Math.ceil(
                product.price - (product.price * product.discountPercentage / 100)
              )}
            </span>
            <span className="text-decoration-line-through text-secondary ms-3">
              $ {product.price}
            </span>
            <div className="float-end">
              <i className="fa-regular fa-star"></i>
              <span className="ms-1">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
