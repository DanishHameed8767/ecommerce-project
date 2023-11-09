import React from "react";
import C1 from "../../images/Category-CellPhone.png";
import C2 from "../../images/Category-Computer.png";
import C3 from "../../images/Category-SmartWatch.png";
import C4 from "../../images/Category-Camera.png";
import C5 from "../../images/Category-Headphone.png";
export default function CategorySlider() {
  return (
    <>
      <div className="container mt-5 card-gap">
        <hr />
      </div>
      <div className="container-fluid">
        <div className="container d-flex justify-content-start px-0 card-gap ms-4">
          <div className="red-box bg-danger"></div>
          <div className="mt-2 text-danger ms-2">Categories</div>
        </div>
        <section className="pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <div className="mb-3 fs-2 ms-2 fw-bold">Browse By Category</div>
              </div>
              <div className="col-3 text-right d-flex justify-content-center">
                <button
                  className="btn btn-danger mb-3 mr-1"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide="prev"
                >
                  <i className="fa fa-arrow-left" />
                </button>
                <button
                  className="btn btn-danger ms-2 mb-3 me-5"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide="next"
                >
                  <i className="fa fa-arrow-right" />
                </button>
              </div>
              <div className="col-12">
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-2 mb-3">
                          <div className="card text-center ct-block">
                            <img
                              className="mx-auto mt-3"
                              alt="100%x280"
                              src={C1}
                              height="56px"
                              width="56px"
                            />
                            <div className="card-body">
                              <span className="card-title fs-5">Phones</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-3">
                          <div className="card text-center ct-block">
                            <img
                              className="mx-auto mt-3"
                              alt="100%x280"
                              src={C2}
                              height="56px"
                              width="56px"
                            />
                            <div className="card-body">
                              <span className="card-title fs-5">
                                {" "}
                                Computers
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-3">
                          <div className="card text-center ct-block">
                            <img
                              className="mx-auto mt-3"
                              alt="100%x280"
                              src={C3}
                              height="56px"
                              width="56px"
                            />
                            <div className="card-body">
                              <span className="card-title fs-5">
                                {" "}
                                SmartWatch
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-3">
                          <div className="card text-center ct-block">
                            <img
                              className="mx-auto mt-3"
                              alt="100%x280"
                              src={C4}
                              height="56px"
                              width="56px"
                            />
                            <div className="card-body">
                              <span className="card-title fs-5">Camera</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 mb-3">
                          <div className="card text-center ct-block">
                            <img
                              className="mx-auto mt-3"
                              alt="100%x280"
                              src={C5}
                              height="56px"
                              width="56px"
                            />
                            <div className="card-body">
                              <span className="card-title fs-5">
                                {" "}
                                Headphones
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container d-flex justify-content-center">
          <button className="btn btn-danger btn-view-all">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
}
