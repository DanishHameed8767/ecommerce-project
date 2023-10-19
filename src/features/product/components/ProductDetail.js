import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductDetails } from "../productSlice";
import { addToCartAsync } from "../../cart/cartSlice";

const ProductDetail = () => {
const detail = useSelector(selectProductDetails);
const dispatch = useDispatch();
const handleClick = () => {
  dispatch(addToCartAsync(detail));
}
  return (
    <>
    <div className="container-fluid row">
      <div id="carouselExample" className="carousel slide w-50 bg-dark row col-5 m-5">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={detail.images[0]} className="d-block mx-auto" alt="..." style={{height:"400px"}}/>
    </div>
    {detail.images[1] && <div className="carousel-item">
      <img src={detail.images[1]} className="d-block mx-auto" alt="..." style={{height:"400px"}}/>
    </div>}
    {detail.images[2] && <div className="carousel-item">
      <img src={detail.images[2]} className="d-block mx-auto" alt="..." style={{height:"400px"}}/>
    </div>}
    {detail.images[3] && <div className="carousel-item">
      <img src={detail.images[3]} className="d-block mx-auto" alt="..." style={{height:"400px"}}/>
    </div>}
    {detail.images[4] &&<div className="carousel-item">
     <img src={detail.images[4]} className="d-block mx-auto" alt="..." style={{height:"400px"}}/>
    </div>}
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
    <p><i className="fa-solid fa-star me-2"></i>{detail.rating} (150 reviews)</p>
    <div className="vr p-0 ms-3" style={{height: '25px',width:'1px'}}>
</div>
     <span className="ms-3" style={{color:"#00FF66"}}>In Stock</span>
    </div>
    <span className="text-danger fs-5">{detail.discountPercentage}% Off </span>
    <div className="d-flex justify-content-start">
    <p className="text-decoration-line-through fs-3 ">${detail.price}</p>
    <p className="text-danger fs-3 ms-3">${detail.price - Math.ceil((detail.price*detail.discountPercentage)/100)}.00</p>
    </div>
    <p>{detail.description}</p>
    <hr />
    <button className="btn btn-danger btn-lg rounded-0 me-3" style={{height: "63px",
    width: "250px"}} onClick={()=>{handleClick()}}><i role='button' className="fa-solid fa-cart-shopping fa-xl me-3"></i>  Add to Cart</button>
    <button className="btn btn-lg bg-light"><i role='button' className="fa-regular fa-heart fa-xl"></i></button>
</div>
</div>
    </>
  );
};

export default ProductDetail;
