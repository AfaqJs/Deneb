import React from "react";
import { shape11, about } from "../assets";

const Business = () => {
  return (
    <section className=" mt-[4rem] max-w-[1100px] mx-auto ">
      <div className=" absolute min-w-[48%] left-0">
        <img src={shape11} alt="" className=" " />
      </div>

        <div className=" relative flex items-center smml:justify-between ssms:justify-center flex-wrap lg:px-0 px-[15px] ">
          <div className=" w-[500px]">
          <img src={about} alt="about-image" className=" z-[20px]  ssms:pr-0  ssms:ml-0  pr-[3rem]   " />
          </div>
          
          <div className=" width-o-t w-[44.5%] lg:w-[50%] ssms:text-center text-justify smml:text-justify">
            <h2 className=" smml:text-[47px] text-[27px]   ssms:ml-0 smml:mt-0 mt-[25px] font-semibold smml:text-justify ssms:text-center">Why You Hire Us?</h2>
            <p className=" ssms:ml-0smml:w-[100%] xs:w-[25rem] ssms:w-[100%]   text-[15px] py-[20px] text-[#7a808d] smml:text-justify ssms:text-center ssms:ml-0 ">Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
            <p className=" pb-[25px] text-[15px] text-[#7a808d] smml:text-justify ssms:text-center  ssms:ml-0smml:w-[100%] xs:w-[25rem] ssms:ml-0 ssms:w-[100%]">Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.</p>
            <button className=" px-[32px] py-[9px] bg-[#feb000] font-medium text-[#fff] rounded-[23px] text-[13px]  ssms:ml-0">READ MORE</button>
          </div>
        </div>
      
    </section>
  );
};

export default Business;
