import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCartProducts } from "../../cart/cartSlice";
import { calculateTotalAmount, discountedPrice } from "../../../app/constant";
import { startStripeCheckoutAsync } from "../orderSlice";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const cartProducts = useSelector(selectAllCartProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    detail: "",
    country: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const orderData = {
    total_amount:calculateTotalAmount(cartProducts),
    products: [
      ...cartProducts.map((item, i, arr) => {
        return { product_id: item.product._id, quantity: item.quantity };
      }),
      ],
    address:address
  };
  console.log(orderData);
  dispatch(startStripeCheckoutAsync(orderData));
  navigate("/checkout",{replace:true});
  }

  return (
    <>
      {
        <div className="container">
          <main>
            <div className="pb-5 text-center">
              <h2>Checkout form</h2>
            </div>
            <div className="row g-5 mb-5 bg-secondary-subtle pb-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-danger">Your cart</span>
                  <span className="badge bg-danger rounded-pill">
                    {cartProducts.length}
                  </span>
                </h4>
                <ul className="list-group mb-3">
                  {cartProducts.map((value) => {
                    const item = value.product || value.arrival;
                    return (
                      <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                          <h6 className="my-0">{item.title}</h6>
                          <small className="text-body-secondary">
                            Quantity : {value.quantity}
                          </small>
                        </div>
                        <span className="text-body-secondary">
                          PKR{" "}
                          {discountedPrice(
                            item.price,
                            item.discountPercentage,
                            value.quantity
                          )}
                        </span>
                      </li>
                    );
                  })}
                  <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−PKR 5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>PKR {calculateTotalAmount(cartProducts)}</strong>
                  </li>
                </ul>
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                    />
                    <button type="submit" className="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-7 col-lg-8">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <h4 className="mb-3">Billing address</h4>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="detail"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required={true}
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select
                        className="form-select"
                        id="country"
                        name="country"
                        onChange={(e) => handleChange(e)}
                        required={true}
                      >
                        <option value="">Choose...</option>
                        <option>Pakistan</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <select
                        className="form-select"
                        id="state"
                        name="state"
                        onChange={(e) => handleChange(e)}
                        required={true}
                      >
                        <option value="">Choose...</option>
                        <option>Punjab</option>
                        <option>Sindh</option>
                        <option>KPK</option>
                        <option>Balouchistan</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="zip"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        required={true}
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="save-info"
                    />
                    <label className="form-check-label" htmlFor="save-info">
                      Save this information for next time
                    </label>
                  </div>
                  <hr className="my-4" />
                  <button className="btn btn-danger w-100 btn-lg" type="submit">
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      }
    </>
  );
}
