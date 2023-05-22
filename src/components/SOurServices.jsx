import React, { useState } from "react";
import {
  stratage,
  bussinessicon,
  webdeb,
  app,
  disgitaldesign,
  analyis,
  lunchimage,
  lunchicon,
  devimage,
  webiconS,
  analyisicon,
  devicon,
  analyisimage,
  websol2,
} from "../assets";

import { services } from "../constants";

const SOurServices = () => {

  const [toggleState, setToggleState] = useState(1);
  const [Date, setData] = useState(services);
  
  const setIndex = (index, keyvalue) => {
    const updatedItems = services.filter((curElem) => {
      return curElem.catagory === keyvalue
    })
    setData(updatedItems)

    setToggleState(index);
  };

  return (
    <section className=" max-w-[1100px] mx-auto mt-[4rem]">
      <div className=" flex  justify-center flex-wrap">
        <div
          onClick={() => setIndex(1, "one")}
          className={`mx-[12px] cursor-pointer w-[140px] h-[140px] circle text-center font-semibold rounded-[10px] ${
            toggleState === 1 ? " current-tab" : ""
          } `}
        >
          <img src={webiconS} alt="" className=" m-auto w-[55%] mt-[25px]" />
          <h5>Web Solution</h5>
        </div>
        <div
          onClick={() => setIndex(2, "two")}
          className={` mx-[12px] cursor-pointer w-[140px] h-[140px] circle text-center font-semibold rounded-[10px] ${
            toggleState === 2 ? " current-tab" : ""
          }`}
        >
          <img src={stratage} alt="" className=" m-auto w-[45%] mt-[15px]" />
          <h5 className=" leading-[19px] mt-[5px]">
            Strategy <br /> & Research
          </h5>
        </div>
        <div
          onClick={() => setIndex(3, "three")}
          className={` business-text-3 Business mx-[12px]  cursor-pointer w-[140px] h-[140px circle text-center font-semibold rounded-[10px] ${
            toggleState === 3 ? " current-tab" : ""
          }`}
        >
          <img src={webdeb} alt="" className=" m-auto w-[47%] mt-[15px]" />
          <h5 className="leading-[19px] mt-[5px] ">
            Web <br /> Development
          </h5>
        </div>
        <div
          onClick={() => setIndex(4, "four")}
          className={` Business BusinesP2 mx-[12px] setMargin cursor-pointer w-[140px] h-[140px circle text-center font-semibold rounded-[10px]  ${
            toggleState === 4 ? " current-tab" : ""
          }`}
        >
          <img src={app} alt="" className=" m-auto w-[47%] mt-[25px]" />
          <h5>App Design</h5>
        </div>
        <div
          onClick={() => setIndex(5, "five")}
          className={` Business BusinesP2 BusinesP3 mx-[12px] setMargin cursor-pointer w-[140px] h-[140px circle text-center font-semibold rounded-[10px] ${
            toggleState === 5 ? " current-tab" : ""
          }`}
        >
          <img
            src={disgitaldesign}
            alt=""
            className=" m-auto w-[50%] mt-[15px] rounded-[10px]"
          />
          <h5 className="leading-[19px] mt-[5px] ">
            Digital <br /> Marketing
          </h5>
        </div>
        <div
          onClick={() => setIndex(6, "six")}
          className={` Business BusinesP2 BusinesP3 BusinesP4 mx-[12px] setMargin cursor-pointer w-[140px] h-[140px circle text-center font-semibold rounded-[10px]  ${
            toggleState === 6 ? " current-tab" : ""
          }`}
        >
          <img
            src={bussinessicon}
            alt=""
            className=" m-auto w-[50%] mt-[15px]"
          />
          <h5 className="leading-[19px] mt-[5px] business-text-3">
            Business <br /> Analysisn
          </h5>
        </div>
      </div>

      <div className=" mt-[6rem] mx-auto lg-px-0 px-[15px]">
        {Date.map((content, index) => index === 0 && (
           
          <div key={content.image} className=" flex justify-between flex-wrap smml:flex-nowrap items-center ">
            <div className=" xs:w-[500px] ss:w-[650px] sm:w-[900px]  text-[15px] text-[#7a808d] text-justify">
              <h2 className=" text-[45px] font-semibold text-black text-justify ssms:text-center smml:text-justify">{content.h2}</h2>
              <p className=" mt-[20px] text-justify ssms:text-center smml:text-justify ">{content.p1}</p>
              <p className=" smml:mt-[20px] text-justify ssms:text-center smml:text-justify mt-0 smml:mt-20px">{content.p2}</p>
              <p className=" smml:mt-[20px] text-justify ssms:text-center smml:text-justify mt-0 smml:mt-20px">{content.p3}</p>
            </div>
            <div className=" smml:mt-0 mt-[2.5rem] xs:w-[500px] ss:w-[650px] sm:w-[900px] smml:pl-[4rem] relative">
              <div className=" absolute lg:w-[70%] w-[95%] ss:w-[80%] px-[15px] sm:w-[60%] sm:left-[210px]  rounded-[10px] left-[35px] ss:left-[90px] smml:w-[80%] smml:h-[250px] smml:left-[105px] top-[-15px] ss:top-[-13px] md:left-[120px] lg:left-[177px] xs:h-[300px] bg-[#feb000] h-[350px] z-0"></div>
              <img
                src={content.image}
                alt=""
                className=" relative   circle rounded-[10px] m-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SOurServices;
