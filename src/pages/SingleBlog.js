import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from  'react-icons/hi';
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic blog Name"} />
      <BreadCrumb title="Dynamic blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-itemscenter gap-10'> <HiOutlineArrowLeft className='fs-4' />
                Go back to blogs</Link>
                <h3 className='title'>
                  A Beautifu Sanday Morning Renaissance
                </h3>
                <img src={blog} className='img-fluid w-100 my-4' alt='blog' />
                <p>
                  dsfsdfsd sdf sdfsd flsdfkl sdj kdssj fdsjflk ds default default fsld jfds fd sdff 
                  sdoj fsd jfsd  dsfsdfsd sdf sdfsd flsdfkl sdj kdssj fdsjflk ds default default fsld jfds fd sdff 
                  sdoj fsd jfsd  dsfsdfsd sdf sdfsd flsdfkl sdj kdssj fdsjflk ds default default fsld jfds fd sdff 
                  sdoj fsd jfsd 
                  sdfjlsd;   sld;fj;sd 
                  sdfjlsd;   sld;fj;sd 
                  sdfjlsd;   sld;fj;sd   sd;ljf; sdjf sdl  dsl;fj sd fj ldsfj l; 
                </p>
              </div>
               
            </div>
          </div>
      </Container>
    
    
    
    
    
    </>
  )
}

export default SingleBlog