import React, { useState } from "react";
import loginImg from "../../../images/login.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
    } else {
      // props.showAlert("Invalid Credentials","danger")
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
        </form>
      </div>
    </>
  );
};

export default Login;
