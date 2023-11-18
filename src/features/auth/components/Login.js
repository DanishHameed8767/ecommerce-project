import React, { useState } from "react";
import loginImg from "../../../images/login.png";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync, selectLoggedInUser } from "../authSlice";
import { useEffect } from "react";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: credentials.email,
      password: credentials.password,
    }
    dispatch(loginUserAsync(userData));
  };

  useEffect(()=>{
    if (isLoggedIn) {
      // Save the auth token and redirect
      navigate("/admin");
      // props.showAlert("Logged in successfully","success")
    } else {
      // props.showAlert("Invalid Credentials","danger")
    }
  },[isLoggedIn])

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container-fluid row mt-5">
        <div
          className="col w-50 p-0 h-50"
          style={{ backgroundColor: "#CBE4E8" }}
        >
          <img src={loginImg} alt="" className="w-75" />
        </div>
        <form className=" mt-3 col  mt-5 ms-5" onSubmit={handleSubmit}>
          <h4>Log In to E-Commerce</h4>
          <div className="mb-3 mt-4">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0 w-50"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email or Phone Number"
              value={credentials.email}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control border-0 border-bottom rounded-0 w-50"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <button type="submit" className="btn btn-danger fs-6 fw-light w-25">
            Login
          </button>
          <a href="#!" className="text-danger text-decoration-none ms-3">
            Forgot Password?
          </a>
          <div className="mt-3">
            <span className="text-secondary">Don't have an account?</span>
            <Link
              to="/signup"
              className="ms-2 text-decoration-none border-bottom text-dark border-dark"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
