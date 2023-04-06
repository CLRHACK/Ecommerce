import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="images/iPhone_14_Plus.jpg"
              className="img-fluid"
              alt="iPhone_14_Plus"
            />
          </div>
          <div className="special-product-content">
            <h5 class="brand"> Havels</h5>
            <h6 className="title">iPhone 14 Plus 512GB Yellow</h6>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$ 1,000.00</span> &nbsp;
              <strike>$ 1,448.69</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b>days 
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
                    <p>Products: 5</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{'width': '25%'}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <Link className='button'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;