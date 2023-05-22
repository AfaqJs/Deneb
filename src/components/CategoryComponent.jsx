import React from "react";

const CategoryComponent = (props) => {
  return (
    <div className="smml:w-[320px] w-[455px] ">
      <div className=" relative mt-8 flex items-center ">
        <h3 className=" element  pl-4 text-[30px] font-semibold">
          {props.heading}
        </h3>
      </div>
      <div className=" relative mt-[1rem]  ">
        <input
          type="text"
          placeholder={props.field1}
          className=" circle1 cursor-pointer p-[16px] pl-[15px] smml:w-[19rem] w-[28.6rem] h-[0px] rounded-[30px] focus:border-none text-[13px] focus:outline-none"
        />
        <span className=" circle2 number-icon text-[#7a808d] w-[45px] rounded-[15px] cursor-pointer  bg-[#eeeeee] absolute  py-[2px] pl-[15px] text-[13px] ">
          15
        </span>
      </div>

      <div className=" relative mt-[1rem] ">
        <input
          type="text"
          placeholder={props.field2}
          className=" circle1 cursor-pointer p-[16px] pl-[15px] smml:w-[19rem] w-[28.6rem] h-[0px] rounded-[30px] focus:border-none text-[13px] focus:outline-none"
        />
        <span className=" circle2 number-icon text-[#7a808d] w-[45px] rounded-[15px] cursor-pointer  bg-[#eeeeee] absolute py-[2px] pl-[15px] text-[13px] ">
          10
        </span>
      </div>
      <div className=" relative mt-[1rem] ">
        <input
          type="text"
          placeholder={props.field3}
          className=" circle1 cursor-pointer p-[16px] pl-[15px] smml:w-[19rem] w-[28.6rem] h-[0px] rounded-[30px] focus:border-none text-[13px] focus:outline-none"
        />
        <span className=" circle2 number-icon text-[#7a808d] w-[45px] rounded-[15px] cursor-pointer  bg-[#eeeeee] absolute py-[2px] pl-[15px] text-[13px] ">
          20
        </span>
      </div>
      <div className=" relative mt-[1rem] ">
        <input
          type="text"
          placeholder={props.field4}
          className=" circle1 cursor-pointer p-[16px] pl-[15px] smml:w-[19rem] w-[28.6rem] h-[0px] rounded-[30px] focus:border-none text-[13px] focus:outline-none"
        />
        <span className=" circle2 number-icon text-[#7a808d] w-[45px] rounded-[15px] cursor-pointer  bg-[#eeeeee] absolute text-[13px] py-[2px] pl-[15px] ">
          8
        </span>
      </div>
      <div className=" relative mt-[1rem] ">
        <input
          type="text"
          placeholder={props.field5}
          className=" circle1 cursor-pointer p-[16px] pl-[15px] smml:w-[19rem] w-[28.6rem] h-[0px] rounded-[30px] focus:border-none text-[13px] focus:outline-none"
        />
        <span className=" circle2 number-icon text-[#7a808d] w-[45px] rounded-[15px] cursor-pointer  bg-[#eeeeee] absolute py-[2px] pl-[15px] text-[13px] ">
          22
        </span>
      </div>
    </div>
  );
};

export default CategoryComponent;
