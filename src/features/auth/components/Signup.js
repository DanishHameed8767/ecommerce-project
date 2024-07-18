import React from "react";
import loginImg from "../../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserAsync, selectLogInAlert, selectLoggedInUser } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../Alert";
import { useState, useEffect } from "react";

const Signup = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const alertMsg = useSelector(selectLogInAlert);
  const [loginAlert,setLoginAlert] = useState(false);
  const isLoggedIn = useSelector(selectLoggedInUser);
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password != credentials.cPassword) {
  setLoginAlert(true);
      return;
    } else {
      const data = {
        name: credentials.userName,
        email: credentials.email,
        password: credentials.password,
        }
      dispatch(createUserAsync(data));
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      {loginAlert && (
        <Alert type={alertMsg.type} msg={alertMsg.msg} />
      )}
      <div className="container-fluid row mt-5">
        <div
          className="col w-50 p-0 h-50 d-none d-md-block"
          style={{ backgroundColor: "#CBE4E8" }}
        >
          <img src={loginImg} alt="" className="w-75" />
        </div>
        <form className=" mt-md-3 col-md col-sm-12 d-flex flex-column ms-md-5" onSubmit={handleSubmit}>
          <h4 className="text-center">Create an account</h4>
          <div className="d-flex flex-column align-items-center">
          <div className="mb-3 mt-4">
            <input
              type="name"
              className="form-control border-0 border-bottom rounded-0"
              id="InputName"
              placeholder="Name"
              name="userName"
              value={credentials.userName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
              id="InputEmail"
              placeholder="Email Address"
              name="email"
              value={credentials.email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom rounded-0"
              id="inputPassword"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom rounded-0"
              id="inputCPassword"
              placeholder="Confirm Password"
              name="cPassword"
              value={credentials.cPassword}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-danger fs-6 fw-normal">
            Create Account
          </button>
          <div className="mt-3">
            <span className="text-secondary">Already have account?</span>
            <Link
              to="/login"
              className="ms-2 text-decoration-none border-bottom text-dark border-dark"
            >
              Log in
            </Link>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
