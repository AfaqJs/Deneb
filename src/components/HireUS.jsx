import React from "react";
import { footerlayer } from "../assets";

const HireUS = () => {
  return (
    <section className=" xfm:hidden xs:block max-w-[1100px] mx-auto mt-[2rem] relative top-[100px] z-50">
      <div className=" text-[#fff] flex flex-wrap flex-row border-[1px] border-solid circle rounded-[10px] smml:w-[900px] w-[450px] mx-auto p-[3rem] bg-[#ffc107] items-center ">
        <div className="mr-auto items-center">
          <h3 className=" text-[30px] font-semibold ">
            Have Any Project in Mind ?
          </h3>
          <hr className=" w-[100px] border-[#fff] border-[1.2px] mt-[5px] mb-[10px]" />
          <p className="w-[500px] font-medium text-[14px]">
            Curabitur libero eros, efficitur sit amet  sodales tincidunt, <br/> aliquet
            et leo sed ut nibh feugiat, auctor enim quis.
          </p>
        </div>
        <div className=" mx-auto smml:mx-0">
          <button className=" smml:mt-0 mt-[1rem] py-[10px] px-[25px] rounded-[20px] text-[14px] bg-white text-black font-medium">
            HIRE US
          </button>
        </div>
      </div>
      <div className=" ">
        <img
          src={footerlayer}
          alt=""
          className="absolute left-[45px] top-[14px] right-0"
        />
      </div>
    </section>
  );
};

export default HireUS;
