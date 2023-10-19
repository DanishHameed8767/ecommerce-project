import React from 'react'
import loginImg from '../../../images/login.png';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
      <div className="container-fluid row mt-5">
    <div className="col w-50 p-0 h-50" style={{backgroundColor:"#CBE4E8"}}>
        <img src={loginImg} alt="" className='w-75'/>
    </div>
     <form className=' mt-3 col  mt-5 ms-5'>
    <h2 className=''>Create an account</h2>
    <span>Enter your details below</span>
  <div className="mb-3 mt-4">
    <input
      type="name"
      className="form-control border-0 border-bottom rounded-0 w-50"
      id="InputName"
      placeholder='Name'
    />
  </div>
  <div className="mb-3 mt-4">
    <input
      type="email"
      className="form-control border-0 border-bottom rounded-0 w-50"
      id="InputEmail"
      placeholder='Email or Phone Number'
    />
  </div>
  <div className="mb-3">
    <input
      type="password"
      className="form-control border-0 border-bottom rounded-0 w-50"
      id="InputPassword"
      placeholder='Password'
    />
  </div>
  <button type="submit" className="btn btn-danger fs-6 fw-normal w-50">
    Create Account
  </button>
  <div className='mt-3'>
  <span className='text-secondary'>Already have account?</span>
  <Link to="/login" className='ms-2 text-decoration-none border-bottom text-dark border-dark'>Log in</Link>
  </div>
</form>
</div>
    </>
  )
}

export default Signup
