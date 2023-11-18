import React from "react";
import loginImg from "../../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password != credentials.cPassword) {
      console.log("Passwords do not match");
      return;
    } else {
      const response = await fetch("http://localhost:5000/signup/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.userName,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/admin");
        // props.showAlert("Logged in successfully","success")
        // } else {
        // props.showAlert("Invalid Credentials","danger")
        // }
      }
    }
  };

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
          <h2 className="">Create an account</h2>
          <span>Enter your details below</span>
          <div className="mb-3 mt-4">
            <input
              type="name"
              className="form-control border-0 border-bottom rounded-0 w-50"
              id="InputName"
              placeholder="Name"
              name="userName"
              value={credentials.userName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3 mt-4">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0 w-50"
              id="InputEmail"
              placeholder="Email or Phone Number"
              name="email"
              value={credentials.email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control border-0 border-bottom rounded-0 w-50"
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
              className="form-control border-0 border-bottom rounded-0 w-50"
              id="inputCPassword"
              placeholder="Confirm Password"
              name="cPassword"
              value={credentials.cPassword}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-danger fs-6 fw-normal w-50">
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
        </form>
      </div>
    </>
  );
};

export default Signup;
