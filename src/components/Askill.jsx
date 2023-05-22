import React from "react";
import { skill } from "../assets";

const Sskill = () => {
  return (
    <section className="mt-[4rem] max-w-[1100px] mx-auto">
      <div className=" flex justify-between flex-wrap items-center ssms:justify-center smml:justify-between">
        <div className=" skill-text w-[500px] smml:px-0 px-[15px]">
          <h2 className=" smml:text-[45px] text-[32px] font-semibold text-justify ssms:text-center smml:text-justify">
            Let Know Our Expert Skills
          </h2>
          <p className="  text-[15px] py-[5px] text-[#7a808d]  text-justify ssms:text-center smml:text-justify">
            Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet
            et leo. Sed ut nibh feugiat, auctor enim quis, hendrerit ipsum.
            Aenean blandit lacinia suscipit. Nunc ut tincidunt massa, eu semper
            lacus.
          </p>

          <div className=" flex justify-between mt-[1.5rem] pr-[30px]">
            <h5 className=" font-semibold ">UI/UX Design</h5>
            <p className=" font-semibold text-[#feb000]">85%</p>
          </div>
          <div className=" skillbg bg-[#f6f6f6] w-[95%] h-[15px] rounded-[10px] mt-[10px] pr-[30px]">
            <div className=" bg-[#feb000] w-[85%] h-[15px] rounded-[10px] relative">
              <div className=" absolute w-[20px] h-[20px] bg-[#fd7e14] top-[-3px] right-[0%] rounded-[50%]"></div>
              <div className=" absolute w-[30px] h-[30px] bg-[#f89d003f] top-[-8px] right-[-4.5px] rounded-[50%]"></div>
            </div>
          </div>

          <div className=" flex justify-between mt-[1.5rem] pr-[30px]">
            <h5 className=" font-semibold ">Web Design</h5>
            <p className=" font-semibold text-[#feb000]">75%</p>
          </div>
          <div className=" skillbg bg-[#f6f6f6] w-[95%] h-[15px] rounded-[10px] mt-[10px] pr-[30px]">
            <div className=" bg-[#feb000] w-[75%] h-[15px] rounded-[10px] relative">
              <div className=" absolute w-[20px] h-[20px] bg-[#fd7e14] top-[-3px] right-[0%] rounded-[50%]"></div>
              <div className=" absolute w-[30px] h-[30px] bg-[#f89d003f] top-[-8px] right-[-4.5px] rounded-[50%]"></div>
            </div>
          </div>

          <div className=" flex justify-between mt-[1.5rem] pr-[30px]">
            <h5 className=" font-semibold ">HTML/CSS</h5>
            <p className=" font-semibold text-[#feb000]">90%</p>
          </div>
          <div className=" skillbg bg-[#f6f6f6] w-[95%] h-[15px] rounded-[10px] mt-[10px] pr-[30px]">
            <div className=" bg-[#feb000] w-[90%] h-[15px] rounded-[10px] relative">
              <div className=" absolute w-[20px] h-[20px] bg-[#fd7e14] top-[-3px] right-[0%] rounded-[50%]"></div>
              <div className=" absolute w-[30px] h-[30px] bg-[#f89d003f] top-[-8px] right-[-4.5px] rounded-[50%]"></div>
            </div>
          </div>

          <div className=" flex justify-between mt-[1.5rem] pr-[30px]">
            <h5 className=" font-semibold ">Sketch</h5>
            <p className=" font-semibold text-[#feb000]">65%</p>
          </div>
          <div className=" skillbg bg-[#f6f6f6] w-[95%] h-[15px] rounded-[10px] mt-[10px] pr-[30px]">
            <div className=" bg-[#feb000] w-[65%] h-[15px] rounded-[10px] relative">
              <div className=" absolute w-[20px] h-[20px] bg-[#fd7e14] top-[-3px] right-[0%] rounded-[50%]"></div>
              <div className=" absolute w-[30px] h-[30px] bg-[#f89d003f] top-[-8px] right-[-4.5px] rounded-[50%]"></div>
            </div>
          </div>
          
        </div>
        <div className="w-[550px] smml:mt-0 mt-[2rem] ">
        <img src={skill} alt="" className=" max-w-[90%] mx-0 sm:mx-auto smml:mx-0"/>
        </div>
      </div>
    </section>
  );
};

export default Sskill;
