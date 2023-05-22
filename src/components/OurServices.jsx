import React from "react";
import { play, servicesIcon, Icon2, Icon3 } from "../assets";

const Services = () => {
  return (
    <section className="  ">
      <h2 className=" mt-[4rem] text-center font-bold text-[2.5rem]">
        Our Service
      </h2>
      <p className=" text-center  text-[15px] mt-[7px] font-normal text-[#7a808d]">
        When unknow printer took a gallery of type and scramblted it to{" "}
        <br className="smml:hidden block" /> makea{" "}
        <br className="smml:block hidden" /> type specimen book
      </p>

      <div className="mt-[3rem] flex max-w-[1100px] mx-auto flex-wrap ">
        <div className="  text-center border-[2px] rounded-[5px] border-[#fff]  px-[40px] pt-[50px] pb-[30px] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-500 mx-auto">
          <img src={servicesIcon} alt="" className=" mx-auto " />
          <h2 className=" font-semibold text-[22px] mt-[16px]">Web Solution</h2>
          <p className=" mx-w-[236px] text-[15px] text-[#7a808d]  mt-[12px] w-[247px]">
            Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue
            egestas laciniaam eu ornare ipsum, quis tristique ligula.
          </p>
          <div className=" mt-[15px] services-btn flex items-center justify-center">
            <img src={play} alt="" className=" w-[14px]  mr-[8px]" />
            <h5 className=" font-medium text-[15px]">READ MORE</h5>
          </div>
        </div>

        <div className=" text-center border-[2px] rounded-[5px] border-[#fff]  px-[40px] pt-[50px] pb-[30px] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-500 mx-auto ">
          <img src={Icon2} alt="" className=" mx-auto " />
          <h2 className=" font-semibold text-[22px] mt-[16px]">Web Solution</h2>
          <p className=" mx-w-[236px] text-[15px] text-[#7a808d]  mt-[12px] w-[247px]">
            Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue
            egestas laciniaam eu ornare ipsum, quis tristique ligula.
          </p>
          <div className=" mt-[15px] services-btn flex items-center justify-center">
            <img src={play} alt="" className=" w-[14px]  mr-[8px]" />
            <h5 className=" font-medium text-[15px]">READ MORE</h5>
          </div>
        </div>

        <div className=" text-center border-[2px] rounded-[5px] border-[#fff]  px-[40px] pt-[50px] pb-[30px] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-500  mx-auto ">
          <img src={Icon3} alt="" className=" mx-auto " />
          <h2 className=" font-semibold text-[22px] mt-[16px]">Web Solution</h2>
          <p className=" mx-w-[236px] text-[15px] text-[#7a808d]  mt-[12px] w-[247px]">
            Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue
            egestas laciniaam eu ornare ipsum, quis tristique ligula.
          </p>
          <div className=" mt-[15px] services-btn flex  items-center justify-center">
            <img src={play} alt="" className=" w-[14px] mr-[8px]" />
            <h5 className=" font-medium text-[15px]">READ MORE</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
