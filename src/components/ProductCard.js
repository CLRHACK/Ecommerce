import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid } = props;
  console.log(grid);
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
            ? "/product/:id"
            : location.pathname === "/product/:id"
            ? "/product/:id"
            : ":id"
          } `}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productimage" />
            <img src={watch1} className="img-fluid" alt="productimage " />
          </div>
          <div className="product-details">
            <h6 className="brand"> New</h6>
            <h5 className="product-title">Apple Watch</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
              Extrêmement léger, le boîtier en aluminium est constitué d’un
              alliage de qualité aérospatiale 100 % recyclé.
            </p>
            <p className="price">$ 9,999,999.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
            ? "/product/:id"
            : location.pathname === "/product/:id"
            ? "/product/:id"
            : ":id"
          } `}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch1} className="img-fluid" alt="product" />
            <img src={watch} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand"> New</h6>
            <h5 className="product-title">Apple Watch Ultra</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"} `}>
              Extrêmement léger, le boîtier en aluminium est constitué d’un
              alliage de qualité aérospatiale 100 % recyclé.
            </p>
            <p className="price">$ 9,999,999.00.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
