import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import {BsInfoCircle} from 'react-icons/bs';
import Meta from "../components/Meta";
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.927812650192!2d100.20536891478841!3d16.829936888414963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dfbcdf34fb8a47%3A0x84e765ec5aec4d20!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiP4Lie4Li04Lia4Li54Lil4Liq4LiH4LiE4Lij4Liy4Lih!5e0!3m2!1sth!2sth!4v1679978773865!5m2!1sth!2sth"
              title="Google Maps"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="Email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
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
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className='mb-0'>
                        44/1 Khek Noi Subdistrict, Khao Kho District,<br /> Phetchabun
                        Province PinCode: 67280
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href='tel: +66 952482396'>
                       +66 952482396
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <CiMail className="fs-5" />
                      <a href='mail:Chaloemrat.he@psru.ac.th'>
                      Chaloemrat.he@psru.ac.th
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsInfoCircle className="fs-5" />
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

      </Container>

    </>
  );
  
};

export default Contact;