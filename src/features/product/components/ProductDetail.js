import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductData } from "../productSlice";
import { addToCartAsync, addToLocalStorageCart, selectAllCartProducts } from "../../cart/cartSlice";
import { selectLoggedInUser } from "../../auth/authSlice";
import { useAlert } from "react-alert";

const ProductDetail = () => {
  var productData = useSelector(selectProductData);
  const cartProducts = useSelector(selectAllCartProducts);
  const alert = useAlert();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser)

  const handleClick = () => {
    const cartItemIndex = cartProducts.findIndex(
      (cartItem) => cartItem.product._id === productData._id
    );
    if(cartItemIndex>=0){
      alert.show("Item already added");
      return;
    }
    if(isLoggedIn){
      dispatch(addToCartAsync(productData));
      alert.success("Item added to cart");
    } else {
      dispatch(addToLocalStorageCart(productData));
      alert.success("Item added to cart");
    }
  };

  var productImageUrl = productData.thumbnail;
  if (productData.thumbnail.slice(0, 6) == "image_") {
    const _path = "https://urban-cart-backend.vercel.app/images/";
    productImageUrl = _path + productData.thumbnail;
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center row">
        <div
          className="carousel slide  bg-dark row col-md-5 col-sm-12 m-4 ms-sm-5 ms-5"
          id="imgCarousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center" style={{height:"400px"}}>
              <img
                src={productImageUrl}
                className="d-block mx-auto img-fluid"
                alt="..."
                />
                </div>
            </div>
            {productData.images[1] && (
              <div className="carousel-item">
                <div className="d-flex justify-content-center" style={{height:"400px"}}>
                <img
                  src={productData.images[1]}
                  className="d-block img-fluid mx-auto"
                  alt="..."
                  // style={{height:"400px"}}
                />
                </div>
              </div>
            )}
            {productData.images[2] && (
              <div className="carousel-item">
                <div className="d-flex justify-content-center" style={{height:"400px"}}>
                <img
                  src={productData.images[2]}
                  className="d-block img-fluid mx-auto"
                  alt="..."
                />
                </div>
              </div>
            )}
            {productData.images[3] && (
              <div className="carousel-item">
                <div className="d-flex justify-content-center" style={{height:"400px"}}>
                <img
                  src={productData.images[3]}
                  className="d-block img-fluid mx-auto"
                  alt="..."
                />
                </div>
              </div>
            )}
            {productData.images[4] && (
              <div className="carousel-item">
                <div className="d-flex justify-content-center" style={{height:"400px"}}>
                <img
                  src={productData.images[4]}
                  className="d-block img-fluid mx-auto"
                  alt="..."
                />
                </div>
              </div>
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#imgCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#imgCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-md-5 m-4">
          <h2>{productData.title}</h2>
          <div className="d-flex justify-content-start">
            <p>
              <i className="fa-solid fa-star me-2"></i>
              {productData.rating}
            </p>
            <div
              className="vr p-0 ms-3"
              style={{ height: "25px", width: "1px" }}
            ></div>
            <span className="ms-3" style={{ color: "#00FF66" }}>
              In Stock
            </span>
          </div>
          <div className="d-flex justify-content-start">
            <p className="text-decoration-line-through fs-3 ">
              $ {productData.price}
            </p>
            <p className="text-danger fs-3 ms-3">
              ${" "}
              {Math.round(productData.price -
                  (productData.price * productData.discountPercentage) / 100
                )}
            </p>
          </div>
          <p>{productData.description}</p>
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
