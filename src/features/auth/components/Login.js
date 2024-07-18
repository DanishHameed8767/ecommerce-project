import React, { useState } from "react";
import loginImg from "../../../images/login.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync, selectLogInAlert, selectLoggedInUser } from "../authSlice";
import { useEffect } from "react";
import Alert from "../../Alert";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const alertMsg = useSelector(selectLogInAlert);
  const [loginAlert,setLoginAlert] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: credentials.email,
      password: credentials.password,
    };
    dispatch(loginUserAsync(userData));
  };

  useEffect(()=>{
    console.log("i was called")
    if(alertMsg){
      setLoginAlert(true);
    }
    setTimeout(()=>{setLoginAlert(false)},3000)
  },[alertMsg])

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/cart");
    }
  }, [isLoggedIn]);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      {loginAlert && (
        <Alert type={alertMsg.type} msg={alertMsg.msg} />
      )}
      <div className="container-fluid row mt-5">
        <div
          className="col-md w-50 p-0 h-50 d-none d-md-block"
          style={{ backgroundColor: "#CBE4E8" }}
        >
          <img src={loginImg} alt="" className="w-75" />
        </div>
        <form className=" mt-md-3 col-md col-sm-12 d-flex flex-column ms-md-5" onSubmit={handleSubmit}>
          <h4 className="text-center">Log In to E-Commerce</h4>
          <div className="d-flex flex-column align-items-center">
          <div className="mb-3 mt-4">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email Address"
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
              className="form-control border-0 border-bottom rounded-0 "
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <div>
          <button type="submit" className="btn btn-danger fs-6 fw-light">
            Login
          </button>
          <a href="#" className="text-danger text-decoration-none ms-3">
            Forgot Password?
          </a>
          </div>
          <div className="mt-3 mb-4">
            <span className="text-secondary">Don't have an account?</span>
            <Link
              to="/signup"
              className="ms-2 text-decoration-none border-bottom text-dark border-dark"
            >
              Sign Up
            </Link>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
