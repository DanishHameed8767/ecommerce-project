import React from 'react'
import C1 from '../../images/icon-delivery.png'
import C2 from '../../images/Icon-Customer service.png'
import C3 from '../../images/Icon-secure.png'

export default function Features() {
  return (
    <>
      <div className="container-fluid card-gap">
      <section className="pt-5 pb-5">
  <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-4 mb-3">
                  <div className="text-center mx-auto feature-icons-ellipse1">
                    <div className='bgc-black feature-icons-ellipse2'>

                    <img
                      alt="100%x280"
                      src={C1}
                      height='40px'
                      width='40px'
                      />
                      </div>
                  </div>
                  <div>
                    <div className='fs-5 text-center fw-bold mt-3'>FREE AND FAST DELIVERY</div>
                    <p className='text-center mt-2'>Free delivery for all orders over $140</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="text-center mx-auto feature-icons-ellipse1">
                    <div className='bgc-black feature-icons-ellipse2'>

                    <img
                      alt="100%x280"
                      src={C2}
                      height='40px'
                      width='40px'
                      />
                      </div>
                  </div>
                  <div>
                    <div className='fs-5 text-center fw-bold mt-3'>24/7 CUSTOMER SERVICE</div>
                    <p className='text-center mt-2'>Friendly 24/7 customer support</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="text-center mx-auto feature-icons-ellipse1">
                    <div className='bgc-black feature-icons-ellipse2'>

                    <img
                      alt="100%x280"
                      src={C3}
                      height='40px'
                      width='40px'
                      />
                      </div>
                  </div>
                  <div>
                    <div className='fs-5 text-center fw-bold mt-3'>MONEY BACK GUARANTEE</div>
                    <p className='text-center mt-2'>We reurn money within 30 days</p>
                  </div>
                </div>
              </div>
    </div>
</section>
    </div>
    </>
  )
}
