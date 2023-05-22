import React from "react";
import SHero from "./SHero";
import FormValidation from "./FormValidation";
import Footer from "./Footer";
import HireUS from "./HireUS";

const Contact = () => {
  return (
    <section>
      <SHero value="Contact Us" />
      <div className=" max-w-[1100px] mx-auto mt-[4rem] lg:px-0 px-[15px]">
        <h2 className=" smml:text-[45px] text-[32px] font-bold leading-[54px]">
        Send us a message
        </h2>
        <p className=' pt-[7px] text-[15px] text-[#7a808d] mb-[2rem]'> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
        <FormValidation/>
      </div>
      <HireUS/>
      <Footer/>
      
    </section>
  );
};

export default Contact;
