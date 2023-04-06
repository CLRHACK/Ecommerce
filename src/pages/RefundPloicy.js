import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
const RefundPloicy = () => {
  return (
    <>
    <Meta title={" Refund Ploicy"} />
     <BreadCrumb title=" Refund Ploicy" />
     <Container class1="policy-wrapper py-5 home-wrapper-2">
      <div className='row'>
        <div className='col-12'>
          <div className='policy'></div>
        </div>
      </div>

     </Container>
   
   
   </>
  )
}

export default RefundPloicy