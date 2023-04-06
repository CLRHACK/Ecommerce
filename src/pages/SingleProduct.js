import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "/images/MLW.jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    console.log(`Text "${text}" has been copied to the clipboard.`);
  };
  

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="/images/airpods_pro_0.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="/images/airpods_pro_1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img src="/images/MME73.jfif" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="/images/MLW.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">AirPods Pro (รุ่นที่ 2)</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 9,999,999</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review"> ( 2 Reviews ) </p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center  my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center  my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center  my-2">
                    <h3 className="product-heading">Availablity :</h3>
                    <p className="product-data">In tock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column   my-2">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column   mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row  mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30">
                      <button className="button border-0" type="sunmit">
                        Add to cart
                      </button>
                      <button className="button signup">Buy It Npw</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="/">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free Shipping dsjsdl fjsdlkf jsdf jlskd jsdlk fjsdl
                      <br /> fjsdflksdflksdjf lkj wekjfewlfwe
                      <b>5-10 business days !</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Copy Product Link :</h3>
                    <a
                      href="/"
                      onClick={(event) => {
                        event.preventDefault();
                        copyToClipboard(
                          "https://store.ais.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/i/airpods_pro_2nd-gen_850x850.jpg"
                        );
                      }}
                    >
                      Click to copy image URL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>sdvxvxcvxcvcxvsdvsdvsdvsdv</p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="reviews-wrapper  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end ">
                <div>
                  <h4 className="mb-2"> Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />

                    <p className="mb-0"> Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        write a Review
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>

                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="reviews">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    sdsdfsdfdjdflkvjdlksvjdsklvjdsklvjsdlkvsdlkvjdslkvjsdjvlksdjvlsdjvksdvlkascascascascdscksdckecse;c,scls;ldckdsvsdvzfd
                    vdvfdsvfdsvfsf
                    dsvdsvds;vkds;vkdsv;kdsl;vdsklvsdkl;vskd;vlskdlv;sdv
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
