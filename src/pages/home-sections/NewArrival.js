import React from "react";

export default function NewArrival() {
  return (
    <>
      <div className="container-fluid">
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
                  <div className="bcontent-4 text-white d-flex justify-content-end flex-column">
                          <div className="fs-3 ms-4">PlayStation 5</div>
                          <p className="ms-4 mb-3 text-light">
                          Black and White version of the PS5 <br /> coming out on sale.
                          </p>
                          <div className="mb-5">
                            <a
                              href="..."
                              className="ms-4 text-decoration-none text-white border-bottom border-white"
                            >
                              Shop now
                            </a>
                          </div>
                        </div>
                  </div>
                  <div className="col-5 px-0">
                    <div className="row">
                      <div className="col-12 px-0 bgc-black">
                        <div className="bcontent-1 text-white d-flex justify-content-end flex-column">
                          <div className="fs-3 ms-3">Women's Collections</div>
                          <p className="ms-3 mb-3 text-light">
                            Featured woman collections that <br /> give you
                            another vibe.
                          </p>
                          <div className="mb-3">
                            <a
                              href="..."
                              className="ms-3 text-decoration-none text-white border-bottom border-white"
                            >
                              Shop now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-4 px-0">
                        <div className="d-flex justify-content-center">
                          <div className="py-0 bgc-black new-arrival-boxes">
                            <div className="bcontent-2 text-white d-flex justify-content-end flex-column">
                              <div className="fs-3 ms-3">
                                Speakers
                              </div>
                              <p className="ms-3 mb-3 text-light">
                                Amazon wireless speakers
                              </p>
                              <div className="mb-3">
                                <a
                                  href="..."
                                  className="ms-3 text-decoration-none text-white border-bottom border-white"
                                >
                                  Shop now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="px-0 ms-4 bgc-black new-arrival-boxes">
                            <div className="bcontent-3 d-flex justify-content-end flex-column">
                              <div className="fs-3 ms-3 text-white">
                                Perfume
                              </div>
                              <p className="ms-3 mb-3 text-light">
                              GUCCI INTENSE OUD EDP
                              </p>
                              <div className="mb-3">
                                <a
                                  href="..."
                                  className="ms-3 text-decoration-none text-white border-bottom border-white"
                                >
                                  Shop now
                                </a>
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
