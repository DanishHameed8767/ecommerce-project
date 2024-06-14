import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartAsync, updateLocalStorageCart } from "../cartSlice";
import { discountedPrice } from "../../../app/constant";
import { selectLoggedInUser } from "../../auth/authSlice";

const Cartitem = ({ cart, delFromCart }) => {
  const isLoggedIn = useSelector(selectLoggedInUser);
  const val = cart.product || cart.arrival;
  const dispatch = useDispatch();
  const [count, setCount] = useState(cart.quantity);
  var src = val.thumbnail;
  if (val.thumbnail.slice(0, 6) == "image_") {
    const _path = "http://localhost:5000/images/";
    src = _path + val.thumbnail;
  }

  const onPlusClick = () => {
    setCount(count + 1);
    const item = { ...cart, quantity: count + 1 };
    if (isLoggedIn) {
      dispatch(updateCartAsync(item));
    } else {
      dispatch(updateLocalStorageCart(item));
    }
  };

  const onMinusClick = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
    if (count > 1) {
      const item = { ...cart, quantity: count - 1 };
      if (isLoggedIn) {
        dispatch(updateCartAsync(item));
      } else {
        dispatch(updateLocalStorageCart(item));
      }
    }
  };

  return (
    <>
      <div className="card rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img src={src} className="img-fluid rounded-3" alt="val.title" />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <p className="lead fw-normal mb-2">{val.title}</p>
              {/* <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p> */}
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button className="btn btn-link px-2" onClick={onMinusClick}>
                <i className="fas fa-minus" />
              </button>
              <input
                id="form1"
                min={0}
                name="quantity"
                value={count}
                readOnly={true}
                type="number"
                className="form-control form-control-sm"
              />
              <button className="btn btn-link px-2" onClick={onPlusClick}>
                <i className="fas fa-plus" />
              </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 className="mb-0">
                PKR {discountedPrice(val.price, val.discountPercentage, count)}
              </h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <button
                href="#"
                onClick={delFromCart}
                className="text-danger border-0 bg-white"
              >
                <i className="fas fa-trash fa-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
