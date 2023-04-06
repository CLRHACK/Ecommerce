import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
const Wishist = () => {
  return (
    <>
     <Meta title={"wishist"} />
      <BreadCrumb title="wishist" />
      <Container class1='wishist-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlisst-card position-relative'>
                    <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                        <div className='wishlist-card-image'>
                            <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />

                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'> Titanium Case with Orange Alpine Loop</h5>
                        <h6 className='price '>$ 9,999,999</h6>
                        </div>
                       
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlisst-card position-relative'>
                    <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                        <div className='wishlist-card-image'>
                            <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />

                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'> Titanium Case with Orange Alpine Loop</h5>
                        <h6 className='price '>$ 9,999,999</h6>
                        </div>
                       
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlisst-card position-relative'>
                    <img
                  src="images/cross.svg"
                  alt="cross" className="position-absolute cross img-fluid"
                />
                        <div className='wishlist-card-image'>
                            <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />

                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'> Titanium Case with Orange Alpine Loop</h5>
                        <h6 className='price '>$ 9,999,999</h6>
                        </div>
                       
                    </div>
                </div>
            </div>
      </Container>
    
    
    </>
  )
}

export default Wishist