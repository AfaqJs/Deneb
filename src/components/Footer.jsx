import React, {useRef} from "react";
import { Link } from 'react-router-dom'


import {
  logo,
  map,
  twitter,
  phone,
  facebook,
  email,
  instagram,
} from "../assets";

const Footer = () => {
  const sectionRef = useRef(null);
  const scrollToAbout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="">
      <div className=" footer">
        <div className=" max-w-[1100px] mx-auto ssms:flex justify-between flex-wrap lg:px-0 px-[15px]">
          <div className="">
            <img src={logo} alt="" />
            <p className=" mt-[1.5rem] ssms:w-[300px] w-[400px] text-[#7a808d] text-[14px] text-justify">
              Quisque orci nisl, viverra et sem ac, tincidunt egestas massa.
              Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec
              tortor praesent consequat urna.
            </p>
            <div className=" flex  mt-[18px] items-center">
              <img src={facebook} alt="" className=" mr-[10px] w-[30px]" />
              <img src={twitter} alt="" className=" mr-[10px] w-[30px]" />
              <img src={instagram} alt="" className=" insta] w-[33px]" />
            </div>
          </div>

          <div className=" ssms:mt-0 mt-[2rem]">
            <h4 className=" font-semibold text-[22px]">Links</h4>

            <ul className=" pages-links mt-[1rem] text-[14px] text-[#7a808d] ">
              <li className=" !pl-0"  onClick={scrollToAbout}>
                <Link to="/">Home</Link>
              </li>
              <li  onClick={scrollToAbout}>
                <Link to="/about">About US</Link>
              </li>
              <li  onClick={scrollToAbout}>
                <Link to="/services">Services</Link>
              </li>
              <li onClick={scrollToAbout}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li  onClick={scrollToAbout}>
                <Link to="/blog">Blog</Link>
              </li >
              <li className=""  onClick={scrollToAbout}>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="ssms:mt-0 mt-[2rem] text-[#7a808d] ">
            <h4 className=" font-semibold text-[22px] text-[#000] ">Contact Us</h4>
            <div className=" flex items-center mt-[1rem] text-[14px]">
              <img src={phone} alt="" className=" w-[15px] mr-[10px]" />
              <div>
                <p>1800-121-3637</p>
              </div>
            </div>
            <div className=" flex items-center mt-[1rem] text-[14px]">
              <img src={email} alt="" className=" w-[15px] mr-[10px]" />
              <div>
                <p>info@deneb.com</p>
              </div>
            </div>
            <div className=" flex items-center mt-[1rem] text-[14px]">
              <img src={map} alt="" className=" w-[15px] mr-[10px]" />
              <div>
                <p>125, Park street aven, Brocklyn, Newyork.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#edecf0] w-[100%] h-[30px]  text-center text-[14px]">
        <h5 className=" py-[5px]">
          Copyright © 2022 <span className=" text-[#feb000]">Deneb.</span> All
          rights reserved.
        </h5>
      </div>
    </section>
  );
};

export default Footer;
