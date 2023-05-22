import React from "react";
import { shape11, about, award, signature } from "../assets";

const SHireUs = () => {
  return (
    <section className=" mt-[4rem] max-w-[1100px] mx-auto">
      <div className=" absolute min-w-[48%] left-0">
        <img src={shape11} alt="" className=" " />
      </div>

      <div className=" relative flex items-center justify-between flex-wrap smml:px-0 px-[15px] ssms:justify-center smml:justify-between ">
        <img src={about} alt="about-image" className=" z-[20px] w-[28rem] " />
        <div className=" w-[500px]">
          <h2 className=" smml:text-[45px] text-[32px] font-semibold smml-mt-0 mt-[20px] text-justify ssms:text-center smml:text-justify">Why You Hire Us?</h2>
          <p className="  text-[15px] py-[20px] text-[#7a808d] text-justify ssms:text-center smml:text-justify">
            Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna.
            Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit
            amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
          </p>
          <p className=" pb-[25px] text-[15px] text-[#7a808d] text-justify ssms:text-center smml:text-justify">
            Suspendisse potenti. Aliquam elementum felis purus, quis vulputate
            libero semper nec. Morbi tincidunt maximus nisl vel placerat.
            Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec
            metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus
            elementum arcu, eget eleifend tortor.
          </p>
          <div className=" flex  items-center ssms:justify-center smml:justify-between">
            <img src={award} alt="" className="  mr-[20px] "/>
            <div>
                <img src={signature} alt="" />
                <h3 className=" serivces-text text-[20px] font-semibold text-[#feb000]">Deneb Team</h3>
                <p className="text-[20px]">Best Award 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SHireUs;
