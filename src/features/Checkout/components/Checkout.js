import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAsync, selectAllCartProducts } from "../../cart/cartSlice";
import { discountedPrice } from "../../../app/constant";
import { useNavigate } from "react-router-dom";
import { addOrderAsync, selectAllOrders } from "../orderSlice";
import { updateProductStockAsync } from "../../product/productSlice";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectAllCartProducts);
  const orders = useSelector(selectAllOrders);
  const totalAmount = cartProducts.reduce((total, value) => {
    const product = value.product || value.sale;
    return (total += discountedPrice(
      product.price,
      product.discountPercentage,
      value.quantity
    ));
  }, 0);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const item = { total_amount: totalAmount, order_number: orders.length + 1 };
    const data = [...cartProducts];
    dispatch(updateProductStockAsync(data));
    dispatch(addOrderAsync(item));
    dispatch(clearCartAsync());
    navigate("/order/placed");
  };
  useEffect(() => {
    if (cartProducts.length === 0) {
      navigate("/cart");
      return;
    }
  }, []);
  return (
    <>
      <div className="container">
        <main>
          <div className="py-5 text-center">
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
                  const item = value.product || value.sale;
                  return (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{item.title}</h6>
                        <small className="text-body-secondary">
                          Quantity : {value.quantity}
                        </small>
                      </div>
                      <span className="text-body-secondary">
                        $
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
                  <span className="text-success">−$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${totalAmount}</strong>
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
              <h4 className="mb-3">Billing address</h4>
              <form
                className="needs-validation"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      defaultValue=""
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      defaultValue=""
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required={true}
                      />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">
                      Address 2{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select"
                      id="country"
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
                    <select className="form-select" id="state" required={true}>
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
                      type="text"
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
                    id="same-address"
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
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
                <h4 className="mb-3">Payment</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked=""
                      required={true}
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small className="text-body-secondary">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <button className="w-100 btn btn-danger btn-lg" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
