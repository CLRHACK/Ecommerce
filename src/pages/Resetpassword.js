import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Resetpassword = () => {
  return (
    <>
      <Meta title={" Reset password"} />
      <BreadCrumb title=" Reset password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mn-3">Reset password</h3>
              <form action="" className="d-flex flex-column gap-15">
              <CustomInput
                     type="password"
                     name="password"
                     placeholder="password"
                />
                <CustomInput
                       type=" password"
                       name="confirm password"
                       placeholder="Confirm Password"
                />
                <div>
                 
                <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type='submi'>OK</button>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Resetpassword