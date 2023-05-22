import React from "react";
import Hero from "./Hero";
import { next } from "../assets";

const SHero = (props) => {
  return (
    <section className="">
      <div className=" services-hero ">
        <Hero />
        <div className=" smml:mt-[7rem] mt-[3rem] max-w-[558px] xs:max-w-[585px] ss:max-w-[640px] sm:max-w-[730px] smml:max-w-[930px] md:max-w-[1100px] mx-auto">
          <h2 className=" font-bold smml:text-[45px] text-[29px] smml:px-0 px-[15px]  text-[#feb000]">{props.value}</h2>
          <div className=" flex items-center font-medium">
            <h6 className="  font-medium smml:px-0 px-[3px] ml-[1rem] mt-[0.3rem] text-[14px] ">HOME</h6>
            <img src={next} alt="" className=" mt-[0.3rem] smml:w-[1.6%] w-[3.0%]" />
            <h6 className=" mt-[0.2rem]">{props.value}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SHero;
