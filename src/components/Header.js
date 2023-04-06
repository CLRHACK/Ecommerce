import React from "react";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header className="header-upper py-2 ">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-1">
              <div className="header-upper-links justify-content-start">
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img
                    src="/images/lock.png"
                    alt="bag"
                    style={{ width: "50px", height: "50px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-7 ">
              <div className="menu-bottom d-flex align-items-center gap-15 justify-content-center">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary  bg-trasnparent border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      New & Featured
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          New Arrivals
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          100s os Styes Added
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          SNKRS Launch Calendar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <NavLink to="/" className="text-white">
               
                  Home
                </NavLink>
                <NavLink to="/product" className="text-white">
                  Our Store
                </NavLink>
                <NavLink to="/Blogs" className="text-white">
                 
                  Blogs
                </NavLink>
                <NavLink to="contact" className="text-white">
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="col-2 d-flex justify-content-end">
              <div className="input-group ">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search "
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <div className="header-upper-links  align-item-center justify-content-between gap-10">
                <div>
                <Link to="/Compare-product" className="d-flex align-items-center gap-10">
                   <img src="/images/compare.png" alt="compare" />
                </Link>
                </div>
                <div>
                <Link to="wishlist" className="d-flex align-items-center gap-10">
                  <img src="/images/heart.png" alt="wishlist" />
                </Link>
                </div>
                <div>
                <Link to="/cart" className="d-flex align-items-center gap-10">
                  <img src="/images/bag.png" alt="bag" />
                </Link>
                </div>
                <div>
                <Link to="/login" className="d-flex align-items-center gap-10">
                  <img src="/images/user.png" alt="bag" />
                </Link>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
