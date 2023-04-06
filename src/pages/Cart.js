import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title={"cart"} />
      <BreadCrumb title="cart" />
      <Container class1="cart-wrapper home-wrapper-5 py-5">

          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2  d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product images"
                    />
                  </div>
                  <div className="w-75">
                    <p>GDffdhg</p>
                    <p>Size: hgf</p>
                    <p>Color: gfd</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 9,999</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div>
                    <MdDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$9,999</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
              <Link to="product" className="button">
                Continue To Shopping{" "}
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 10,000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                checkout
                </Link>
              </div>
              </div>
            </div>
          </div>

      </Container>
    </>
  );
};

export default Cart;
