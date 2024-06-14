import React from "react";
import Qrcode from "../../images/Qrcode 1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-black text-white">
        <footer className="py-5 container">
          <div className="row">
            <div className="col-md-3 mb-3 footer-email">
              <form>
                <h5 className="mb-3">Exclusive</h5>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="d-flex flex-column flex-sm-row w-md-100 w-sm-50 gap-2">
                  <div className="input-icons col-sm-6">
                    <input
                      className="input-field form-control rounded-0"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <i className="fa-solid fa-paper-plane icon"></i>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <h5 className="mb-3">Support</h5>
              <ul className="nav flex-column te">
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    111 Bijoy sarani, Dhaka,
                    <br /> DH 1515, Bangladesh.
                  </a>
                </li>
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    exclusive@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    +88015-88888-9999
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="mb-3">Account</h5>
              <ul className="nav flex-column">
                <li className="mb-2">
                  <Link to="/login" className="nav-link p-0 text-white">
                    My Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to='/order/list' className="nav-link p-0 text-white">
                    My Orders
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart" className="nav-link p-0 text-white">
                    Cart
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/wishlist" className="nav-link p-0 text-white">
                    Wishlist
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="nav-link p-0 text-white">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="mb-3">Quick Link</h5>
              <ul className="nav flex-column">
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    Terms Of Use
                  </a>
                </li>
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    FAQ
                  </a>
                </li>
                <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-3">
              <form>
                <h5>Download App</h5>
                <p>Save PKR 3 with App New User Only</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <img src={Qrcode} alt="" className="mx-auto" />
                </div>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <a class="btn btn-google" href="..." title="Google Play">
                    Google Play
                  </a>
                </div>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <a
                    class="btn btn-google btn-apple"
                    href="..."
                    title="Google Play"
                  >
                    Apple Store
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="...">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="...">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="...">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
