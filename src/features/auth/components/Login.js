import React from 'react'
import loginImg from '../../../images/login.png';
const Login = () => {
  return (
    <>
    <div className="container-fluid row mt-5">
    <div className="col w-50 p-0 h-50" style={{backgroundColor:"#CBE4E8"}}>
        <img src={loginImg} alt="" className='w-75'/>
    </div>
     <form className=' mt-3 col  mt-5 ms-5'>
    <h4>Log In to E-Commerce</h4>
  <div className="mb-3 mt-4">
    <input
      type="email"
      className="form-control border-0 border-bottom rounded-0 w-50"
      id="InputEmail"
      aria-describedby="emailHelp"
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
  <button type="submit" className="btn btn-danger fs-6 fw-light w-25">
    Login
  </button>
  <a href='#!' className='text-danger text-decoration-none ms-3'>Forgot Password?</a>
</form>
</div>
    </>
  )
}

export default Login
