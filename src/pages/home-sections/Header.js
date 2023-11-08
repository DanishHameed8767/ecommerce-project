import React from 'react';
import bgimg from '../../images/1.png';
import AppleLogo from '../../images/apple-logo.png'
const Header = () => {
  return (
    <>
      <div className="row container-fluid">
      <div className='list-group col-3'>
      <li className='list-group-item border-0 text-end fs-5'>Woman’s Fashion</li>
      <li className='list-group-item border-0 text-end fs-5'>Men’s Fashion </li>
      <li className='list-group-item border-0 text-end fs-5'>Electronics </li> 
      <li className='list-group-item border-0 text-end fs-5'>Home & Lifestyle </li>
      <li className='list-group-item border-0 text-end fs-5'>Medicine </li>
      <li className='list-group-item border-0 text-end fs-5'>Sports & Outdoor </li>
      <li className='list-group-item border-0 text-end fs-5'>Baby’s & Toys</li>
      <li className='list-group-item border-0 text-end fs-5'>Groceries & Pets</li>
      </div>
      <div className="vr p-0" style={{height: '370px',width:'1px'}}>
</div>
      <div className="container bg-black col-8 d-flex flex-row justify-content-between mt-3">
        <div><div className='d-flex flex-row mt-3 align-items-start'>
      <img src={AppleLogo} className="object-fit-contain mt-2 ms-3" style={{width:"40px"}} alt="" />
      <div className='fs-6 fw-light text-white mt-4 ms-4'>iPhone 14 Series</div>
      </div>
      <div className='fs-1 fw-normal text-white ms-3'>Up to 10% off Voucher</div>
      <a href="..." className='ms-3 text-decoration-none text-white border-bottom border-white'>Shop now</a>
      </div>
    <img src={bgimg} className='img-fluid' alt="" />
    </div>
    </div>
    </>
  )
}

export default Header
