import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Color from '../components/Color';
import Meta from "../components/Meta";
import Container from '../components/Container';
const CompareProduct = () => {
  return (
    <>
      <Meta title={"CompareProduct"} />
      <BreadCrumb title="CompareProduct" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch-01-1.png" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Titanium Case with Orange Alpine Loop
                  </h5>
                  <h6 className="price mb-3 mt-3">$799</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Apple Watch Ultra</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      
                    </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch-01-1.png" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Titanium Case with Orange Alpine Loop
                  </h5>
                  <h6 className="price mb-3 mt-3">$799</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Apple Watch Ultra</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      
                    </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch-01-1.png" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Titanium Case with Orange Alpine Loop
                  </h5>
                  <h6 className="price mb-3 mt-3">$799</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Apple Watch Ultra</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      
                    </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch-01-1.png" alt="watch" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">
                    Titanium Case with Orange Alpine Loop
                  </h5>
                  <h6 className="price mb-3 mt-3">$799</h6>

                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Apple Watch Ultra</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      
                    </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
           
          </div>

      </Container>
    </>
  );
};

export default CompareProduct;