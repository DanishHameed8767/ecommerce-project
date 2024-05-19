import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addOrderAsync } from "../orderSlice";

function OrderPlaced() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("order")){
      dispatch(addOrderAsync());
      localStorage.removeItem("order")
    }
  },[])
  return (
    <>
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-sm-6 col-sm-offset-3">
            <br />
            <br /> <h2 className="text-danger">Success</h2>
            {/* <h3>Order #1</h3> */}
            <p style={{ fontSize: 20, color: "#5C5C5C" }}>
              Your order has been placed successfully.
            </p>
            <Link to="/" className="btn btn-danger me-3">
              Back to home
            </Link>
            <Link to="/order/list" className="btn btn-danger">
              Check your orders
            </Link>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPlaced;
