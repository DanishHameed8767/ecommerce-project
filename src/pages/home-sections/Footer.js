import React from "react";
import Qrcode from "../../images/Qrcode 1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-black text-white">
        <footer className="py-5 container">
          <div className="row text-xs-center">
            <div className="col-md-3 col-sm-6 mb-3">
                <h5 className="mb-3 fw-bold">Exclusive</h5>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="d-flex flex-column flex-sm-row w-md-100 w-sm-50 gap-2">
                </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
              <ul className="nav flex-column text-xs-center">
              <li className="mb-3">
                  <a href="..." className="nav-link p-0 text-white text-lg fs-5 fw-bold">
                    Support
                  </a>
                </li>
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
            <div className="col-sm-6 col-md-3 mb-3">
              <ul className="nav flex-column text-xs-center">
              <li className="mb-3 p-0 text-white text-lg fs-5 fw-bold">
                    Account
                </li>
                <li className="mb-2">
                  <Link to="/login" className="nav-link p-0 text-white">
                    My Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to='/orders' className="nav-link p-0 text-white">
                    My Orders
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart" className="nav-link p-0 text-white">
                    Cart
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="nav-link p-0 text-white">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 mb-3">
              <ul className="nav flex-column text-xs-center">
                <li className="mb-3 p-0 text-white text-lg fs-5 fw-bold">
                    Quick Link
                </li>
                <li className="mb-3">
                  <Link to={"/"} className="nav-link p-0 text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/"} className="nav-link p-0 text-white">
                    Terms Of Use
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/"} className="nav-link p-0 text-white">
                    FAQ
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to={"/"} className="nav-link p-0 text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center py-4 my-4 border-top">
            <p className="text-center">© 2023 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
