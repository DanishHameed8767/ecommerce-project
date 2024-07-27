import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllOrders, showOrdersAsync } from "../orderSlice";

export default function OrderList() {
  const dispatch = useDispatch();
  const allOrders = useSelector(selectAllOrders);
  console.log(allOrders);
  useEffect(() => {
    dispatch(showOrdersAsync());
  }, [dispatch]);
  return (
    <>
      <div className="container mt-3">
        <h1>Your Orders</h1>
      </div>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div className="container mx-auto border border-danger rounded-3">
          <div
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
          </div>
          {allOrders.map((val,i) => {
            return (
              <div
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
              </div>
            );
          })}
        </div>
      </div>
      {/* <section className="vh-100" style={{ backgroundColor: "#35558a" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100 text-center">
      <div className="col">
        <button
          type="button"
          className="btn btn-light btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#orderModal"
        >
          <i className="fas fa-info me-2" /> Get information
        </button>
        <div
          className="modal fade"
          id="orderModal"
          tabIndex={-1}
          aria-labelledby="orderModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body text-start p-4">
                <h4 className="mb-5">Thanks for your order</h4>
                <p className="mb-0">Payment summary</p>
                <hr
                  className="mt-2 mb-4"
                  style={{
                    height: 0,
                    backgroundColor: "transparent",
                    opacity: ".75",
                    borderTop: "2px dashed #9e9e9e"
                  }}
                />
                <div className="d-flex justify-content-between">
                  <p className="fw-bold mb-0">Ether Chair(Qty:1)</p>
                  <p className="text-muted mb-0">$1750.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small mb-0">Shipping</p>
                  <p className="small mb-0">$175.00</p>
                </div>
                <div className="d-flex justify-content-between pb-1">
                  <p className="small">Tax</p>
                  <p className="small">$200.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold">$2125.00</p>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center border-top-0 py-4">
                <button
                  type="button"
                  data-bs-button-init=""
                  data-bs-ripple-init=""
                  className="btn btn-primary btn-lg mb-1"
                  style={{ backgroundColor: "#35558a" }}
                >
                  Track your order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

    </>
  );
}
