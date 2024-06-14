import React, { useEffect } from "react";
import Cartitem from "../components/Cartitem";
import { useDispatch, useSelector } from "react-redux";
import {
  delFromCartAsync,
  deleteFromLocalStorageCart,
  fetchAllCartProductsAsync,
  fetchLocalStorageCart,
  selectAllCartProducts,
} from "../cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { selectLoggedInUser } from "../../auth/authSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLoggedInUser);
  const cartProducts = useSelector(selectAllCartProducts);
  const handleCLick = () => {
   if(isLoggedIn){
    navigate("/address");
   } else {
    navigate("/login");
   }
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllCartProductsAsync());
    } else {
      dispatch(fetchLocalStorageCart());
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* {orderId && orderId._id && (<Navigate to={"/checkout"} replace={true}>{dispatch(startStripeCheckoutAsync({...orderData,order_id:orderId}))}</Navigate>)} */}
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {cartProducts &&
                cartProducts.map((cartItem) => {
                  const delFromCart = () => {
                    if (isLoggedIn) {
                      dispatch(delFromCartAsync(cartItem));
                    } else {
                      dispatch(deleteFromLocalStorageCart(cartItem));
                    }
                  };
                  return <Cartitem cart={cartItem} delFromCart={delFromCart} />;
                })}
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form1">
                      Discount code
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-lg ms-3"
                  >
                    Apply
                  </button>
                </div>
              </div>
              {/* <div className="card mb-4">
          <div className="card-body p-5 d-flex fs-4 flex-row text-center">
            <div className='flex-fill me-5'>
              Total Amount: $245
            </div>
          </div>
        </div> */}
              <div className="card">
                <div className="card-body ">
                  <div
                    type="button"
                    className="btn btn-danger btn-block btn-lg "
                    onClick={handleCLick}
                  >
                    Continue to Checkout
                  </div>
                  <span className="ms-4 me-4">Or</span>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
