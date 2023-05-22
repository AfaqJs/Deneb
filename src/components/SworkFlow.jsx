import React from "react";
import {
  analyis,
  lunchimage,
  lunchicon,
  devimage,
  analyisicon,
  devicon,
  analyisimage,
  websol2,
} from "../assets";

const SworkFlow = () => {
  return (
    <section className="max-w-[1100px] mx-auto mt-[5rem] smml:px-0 px-[15px]">
      <div className=" text-center">
        <h2 className=" smml:text-[45px] text-[32px] font-semibold ">Our Work Flow</h2>
        <p className=' pt-[7px] text-[15px] text-[#7a808d]'> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
      </div>

      <div className=" flex flex-wrap smml:flex-nowrap mt-[3rem] items-center justify-center smml:justify-between ">
        <div className=" w-[530px]">
          <img src={analyisimage} alt="" className=" smml:w-[95%] w-[100%]" />
        </div>
        <div className=" w-[530px] smml:text-right text-center smml:mt-0 mt-[1.5rem]">
          <div className=" inline-block bg-white circle w-[80px] h-[80px] rounded-[50%]">
            <img src={analyis} alt="" className="  mx-auto mt-[20px] w-[50%]" />
          </div>

          <h4 className=" text-[30px] font-semibold mt-[7px] ">Analysis</h4>
          <p className=" text-[15px] mt-[4px]">
            Morbi vel tortor at metus malesuada convallis. Nam diam magna,
            laoreet ac libero quis, laoreet semper sem. Etiam erat quam,
            suscipit in orci ut, aliquet finibus tortor. Nullam dui leo,
            convallis quis diam eget, aliquam feugiat nunc. Vivamus quis
            volutpat dui.
          </p>
        </div>
      </div>

      <div className=" flex flex-wrap smml:flex-nowrap smml:mt-[2rem] mt-[2rem] smml:flex-row  -center justify-center smml:justify-between">
        <div className=" w-[530px] smml:text-left text-center smml:mt-0 mt-[1.5rem] smml:mx-0 mx-auto">
        <div className=" w-[530px] smml:hidden block smml:text-right text-center smml:mt-0 mt-[1.5rem]">
          <img src={devimage} alt="" className=" smml:w-[95%] w-[85%] smml:ml-auto smml:mx-0 mx-auto" />
        </div>
          <div className=" smml:mt-0 mt-[1.5rem] inline-block bg-white circle w-[80px] h-[80px] rounded-[50%]">
            <img src={devicon} alt="" className="  mx-auto mt-[20px] w-[50%]" />
          </div>

          <h4 className=" text-[30px] font-semibold mt-[7px]  ">Development</h4>
          <p className=" text-[15px] mt-[4px] px-[35px] ss:px-0">
            Morbi vel tortor at metus malesuada convallis. Nam diam magna,
            laoreet ac libero quis, laoreet semper sem. Etiam erat quam,
            suscipit in orci ut, aliquet finibus tortor. Nullam dui leo,
            convallis quis diam eget, aliquam feugiat nunc. Vivamus quis
            volutpat dui.
          </p>
        </div>
        <div className=" w-[530px] smml:block hidden">
          <img src={devimage} alt="" className=" smml:w-[95%] w-[100%] smml:ml-auto" />
        </div>
      </div>

      <div className=" flex flex-wrap smml:flex-nowrap mt-[2rem] items-center justify-center smml:justify-between ">
        <div className=" w-[530px] smml:mt-0 mt-[1rem]">
          <img src={lunchimage} alt="" className=" w-[95%]" />
        </div>
        <div className=" w-[530px] smml:text-right text-center smml:mt-0 mt-[1.5rem]">
          <div className=" inline-block bg-white circle w-[80px] h-[80px] rounded-[50%]">
            <img src={lunchicon} alt="" className="  mx-auto mt-[20px] w-[50%]" />
          </div>

          <h4 className=" text-[30px] font-semibold mt-[7px] ">Launch</h4>
          <p className=" text-[15px] mt-[4px]">
            Morbi vel tortor at metus malesuada convallis. Nam diam magna,
            laoreet ac libero quis, laoreet semper sem. Etiam erat quam,
            suscipit in orci ut, aliquet finibus tortor. Nullam dui leo,
            convallis quis diam eget, aliquam feugiat nunc. Vivamus quis
            volutpat dui.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SworkFlow;
