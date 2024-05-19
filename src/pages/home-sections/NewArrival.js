import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArrivalsAsync, selectAllArrivals } from "../../features/profile/AdminSlice";
import { Link } from "react-router-dom";

export default function NewArrival() {
  const dispatch = useDispatch();
  const _path = "http://localhost:5000/images/";
  const selectArrivals = useSelector(selectAllArrivals);

  const [main, setMain] = useState({title:'',description:''});
  const [side1, setSide1] = useState({title:'',description:''});
  const [side2, setSide2] = useState({title:'',description:''});
  const [side3, setSide3] = useState({title:'',description:''});

  const mainImageStyle = {
    background: `url(${_path}${main.thumbnail}) no-repeat bottom`,
  }
  const side1ImageStyle = {
    background: `url(${_path}${side1.thumbnail}) no-repeat right`,
  }
  const side2ImageStyle = {
    background: `url(${_path}${side2.thumbnail}) no-repeat center`,
  }
  const side3ImageStyle = {
    background: `url(${_path}${side3.thumbnail}) no-repeat center`,
  }

  useEffect(()=>{
    if(selectArrivals){
      setMain(selectArrivals[0]);
      setSide1(selectArrivals[1]);
      setSide2(selectArrivals[2]);
      setSide3(selectArrivals[3]);
    }
  },[selectArrivals])

  useEffect(()=>{
    dispatch(fetchAllArrivalsAsync());
  },[])
  return (
    <>
      <div className="container-fluid arrival-sec">
        <div className="container d-flex justify-content-start px-0 card-gap ms-4">
          <div className="red-box bg-danger"></div>
          <div className="mt-2 text-danger ms-2">Featured</div>
        </div>
        <section className="pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="mb-3 fs-2 ms-2 fw-bold">New Arrival</div>
              </div>
              <div className="col-12">
                <div className="row d-flex justify-content-evenly">
                  <div className="col-5 bgc-black px-0">
                    <div className="bcontent-4 text-white d-flex justify-content-end flex-column" style={mainImageStyle}>
                      <div className="fs-3 ms-4">{main.title}</div>
                      <p className="ms-4 mb-3 text-light">
                        {main.description}
                        </p>
                      <div className="mb-5">
                        <Link
                          to={"/products/details/" + main._id}
                          className="ms-4 text-decoration-none text-white border-bottom border-white"
                        > 
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 px-0">
                    <div className="row">
                      <div className="col-12 px-0 bgc-black">
                        <div className="bcontent-1 text-white d-flex justify-content-end flex-column" style={side1ImageStyle}>
                          <div className="fs-3 ms-3">{side1.title}</div>
                          <p className="ms-3 mb-3 text-light">
                            {side1.description}
                          </p>
                          <div className="mb-3">
                            <Link
                              to={"/products/details/" + side1._id}
                              className="ms-3 text-decoration-none text-white border-bottom border-white"
                            >
                              Shop now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-4 px-0">
                        <div className="d-flex justify-content-center">
                          <div className="py-0 bgc-black new-arrival-boxes">
                            <div className="bcontent-2 text-white d-flex justify-content-end flex-column" style={side2ImageStyle}>
                              <div className="fs-3 ms-3">{side2.title}</div>
                              <p className="ms-3 mb-3 text-light">
                              {side2.description}
                              </p>
                              <div className="mb-3">
                                <Link
                                  to={"/products/details/" + side2._id}
                                  className="ms-3 text-decoration-none text-white border-bottom border-white"
                                >
                                  Shop now
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="px-0 ms-4 bgc-black new-arrival-boxes">
                            <div className="bcontent-3 d-flex justify-content-end flex-column" style={side3ImageStyle}>
                              <div className="fs-3 ms-3 text-white">
                              {side3.title}
                              </div>
                              <p className="ms-3 mb-3 text-light">
                              {side3.description}
                              </p>
                              <div className="mb-3">
                                <Link
                                  to={"/products/details/" + side3._id}
                                  className="ms-3 text-decoration-none text-white border-bottom border-white"
                                >
                                  Shop now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
