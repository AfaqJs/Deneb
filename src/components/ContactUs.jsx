import React from "react";
import { contact, contactbg } from "../assets";

const ContactUs = () => {
  return (
    <>
      <div className=" mt-[4rem] relative">
        <img src={contactbg} alt="" className=" absolute smml:w-[40%] w-[50%]  " />
      </div>
      <div className=" max-w-[1100px] mx-auto mt-[6rem]  ">
        <div className=" flex justify-between items-center flex-wrap ">
            <div className=" smml:w-[48%] w-[80%] z-10 mx-auto">
                <img src={contact} alt="" className="  w-[100%] h-[100%] " />
            </div>

          <div className=" w-[400px mx-0 ss:mx-auto">
            <div className="contact-text smml:px-0 px-[15px]">
                <h2 className=" smml:text-[45px] xs:text-[32px] text-[25px] font-semibold md:mt-0 mt-[2rem] ">Get In Touch With Us</h2>
                <p className=' pt-[7px] text-[15px] text-[#7a808d]'> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden xfm:hidden'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
            </div>

            <div className="  contactForm mt-[2rem] text-[14px] smml:px-0 px-[15px] ss:pr-[15px]">
              <div className="  xs:flex justify-between smml:w-[100%]  ss:-[100%]">
              <input type="text" placeholder='First Name' required className='smml:px-[30px] contat-f-s ss:px-[40px] py-[10px] px-[15px] circle rounded-[25px] border-none focus:outline-none'/>
              <input type="text" placeholder='Last Name' required className=' mt-[1.1rem] xs:mt-0 ss:px-[40px] contat-f-s smml:px-[30px] smml:py-[10px] px-[15px]  circle rounded-[25px] border-none focus:outline-none'/>
              </div>
              <div className=" xs:flex justify-between mt-[1.2rem] smml:w-[100%]">
              <input type="email" placeholder='Email Address' required className='  contat-f-s ss:px-[40px] smml:px-[30px] py-[10px] px-[15px] circle rounded-[25px] border-none focus:outline-none'/>
              <input type="tel" placeholder='Phone No' required className='smml:px-[30px] contat-f-s py-[10px] px-[15px] circle mt-[1.1rem] xs:mt-0 ss:px-[40px] rounded-[25px] border-none focus:outline-none'/>
              </div>
              <div className=" smml:w-[100%] ">
              <textarea name="" id="" cols="74" rows="5" placeholder="Message" className="circle rounded-[20px] mt-[1.2rem] p-[20px] focus:outline-none respoinsivewidth"></textarea>
              </div>
              <div className=" mt-[1.2rem] ">
                <button className=" bg-[#feb000] py-[7px] px-[20px] rounded-[20px] text-[13px] font-semibold text-[#fff] ">SUBMIT NOW</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
