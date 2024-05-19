import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductDetails } from "../productSlice";
import { addToCartAsync } from "../../cart/cartSlice";
import Timer from "../../Timer";


const ProductDetail = () => {
  var detail = useSelector(selectProductDetails);
  const dispatch = useDispatch();
  var currentTime = Date.now();
  var saleEnds = detail.saleEnds;
  var discount = detail.discountPercentage;
  if(saleEnds < currentTime){
    saleEnds = null;
    discount = null;

  }
   const handleClick = () => {
     dispatch(addToCartAsync(detail));
    };
    var src = detail.thumbnail;
  if (detail.thumbnail.slice(0,6)=='image_') {
    const _path = "http://localhost:5000/images/";
     src = _path + detail.thumbnail;
  }
  return (
    <>
      <div className="container-fluid row">
        <div
          id="carouselExample"
          className="carousel slide w-50 bg-dark row col-12 m-5"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={src}
                className="d-block mx-auto"
                alt="..."
                style={{ height: "400px" }}
              />
            </div>
            {detail.images[1] && (
              <div className="carousel-item">
                <img
                  src={detail.images[1]}
                  className="d-block mx-auto"
                  alt="..."
                  style={{ height: "400px" }}
                />
              </div>
            )}
            {detail.images[2] && (
              <div className="carousel-item">
                <img
                  src={detail.images[2]}
                  className="d-block mx-auto"
                  alt="..."
                  style={{ height: "400px" }}
                />
              </div>
            )}
            {detail.images[3] && (
              <div className="carousel-item">
                <img
                  src={detail.images[3]}
                  className="d-block mx-auto"
                  alt="..."
                  style={{ height: "400px" }}
                />
              </div>
            )}
            {detail.images[4] && (
              <div className="carousel-item">
                <img
                  src={detail.images[4]}
                  className="d-block mx-auto"
                  alt="..."
                  style={{ height: "400px" }}
                />
              </div>
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-4 m-5">
          <h2>{detail.title}</h2>
          <div className="d-flex justify-content-start">
            <p>
              <i className="fa-solid fa-star me-2"></i>
              {detail.rating}
            </p>
            <div
              className="vr p-0 ms-3"
              style={{ height: "25px", width: "1px" }}
            ></div>
            <span className="ms-3" style={{ color: "#00FF66" }}>
              In Stock
            </span>
          </div>
          {discount && <span className="text-danger fs-5">
            {saleEnds && <span>Sale </span>}
            {detail.discountPercentage}% Off{" "}
            {saleEnds && <Timer endTime={saleEnds} />}
          </span>}
          <div className="d-flex justify-content-start">
            <p className="text-decoration-line-through fs-3 ">
              PKR {detail.price}
            </p>
            <p className="text-danger fs-3 ms-3">
              PKR {detail.price -
                Math.ceil((detail.price * detail.discountPercentage) / 100)}
              .00
            </p>
          </div>
          <p>{detail.description}</p>
          <hr />
          <button
            className="btn btn-danger btn-lg rounded-0 me-3"
            style={{ height: "63px", width: "250px" }}
            onClick={() => {
              handleClick();
            }}
          >
            <i
              role="button"
              className="fa-solid fa-cart-shopping fa-xl me-3"
            ></i>{" "}
            Add to Cart
          </button>
          <button className="btn btn-lg bg-light">
            <i role="button" className="fa-regular fa-heart fa-xl"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
