import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
const OurStore = () => {
  const [grid, setGrid] = useState(4); 
 

  
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-card">Shop By categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-card">Filrwe By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        L (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        XL (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-card">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Oppo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speaker
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablet
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Vivo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-card">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>Boîtier en aluminium minuit</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 999.99</b>
                    </div>
                  </div>
                  
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>Boîtier en aluminium minuit</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 999.99</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-content-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Feayured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabeticall, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabeticall, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-10">
                      <p className="totalproducts mb-0">21 Product</p>
                      <div className="d-flex gap-10 align-items-center grid">
                        <img onClick={() => {
                          setGrid(3);
                        }}
                          src="images/gr4.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img onClick={() => {
                          setGrid(4);
                        }}
                          src="images/gr3.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img onClick={() => {
                          setGrid(6);
                        }}
                          src="images/gr2.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                        <img onClick={() => {
                          setGrid(12);
                        }}
                          src="images/gr.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-;ist pb-5">
                  <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  </div>
                </div>
              </div>
            </div>
            </div>
      </Container>
    </>
  );
};

export default OurStore;
