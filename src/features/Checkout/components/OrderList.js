import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllOrders, showOrdersAsync } from "../orderSlice";

export default function OrderList() {
  const dispatch = useDispatch();
  const allOrders = useSelector(selectAllOrders);
  useEffect(() => {
    dispatch(showOrdersAsync());
  }, []);
  return (
    <>
      <div className="container mt-3">
        <h1>Your Orders</h1>
      </div>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div className="container mx-auto border border-danger rounded-3">
          <a
            href="..."
            className="list-group-item list-group-item-action d-flex gap-3 py-3 border-bottom border-danger"
            aria-current="true"
          >
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Orders</h6>
              </div>
              <div>Total</div>
              <div>Status</div>
              <small className="opacity-50 text-nowrap"></small>
            </div>
          </a>
          {allOrders.map((val,i) => {
            return (
              <a
                href="..."
                className="text-decoration-none text-dark d-flex gap-3 py-3 border-bottom border-danger"
                aria-current="true"
              >
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0"># {++i}</h6>
                  </div>
                  <div className="ps-4">PKR {val.total_amount}</div>
                  <div>{val.status}</div>
                  <small className="opacity-50 text-nowrap"></small>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
