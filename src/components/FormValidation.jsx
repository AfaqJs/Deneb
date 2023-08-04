import React from "react";

const FormValidation = () => {
  return (
    <section className=" mt-[1rem] max-w-[1100px] text-[14px] mx-auto">
      <form>
        <div className="  flex  justify-between flex-wrap">
          <input
            type="text"
            placeholder="First Name"
            required
            className="px-[30px] w-[47%] h-[35px] circle rounded-[25px] border-none focus:outline-none color-f-m "
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="px-[30px] w-[47%] h-[35px] circle rounded-[25px] border-none focus:outline-none color-f-m "
          />
        </div>
        <div className="   flex  justify-between flex-wrap mt-[1.8rem]">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="px-[30px] w-[47%] h-[35px] circle rounded-[25px] border-none color-f-m  focus:outline-none color-f-m "
          />
          <input
            type="tel"
            placeholder="Phone No"
            required
            className="px-[30px] w-[47%] h-[35px] circle rounded-[25px] border-none focus:outline-none color-f-m "
          />
        </div>
        <div className="  flex  justify-between flex-wrap mt-[1.8rem]">
          <input
            type="text"
            placeholder="Project title"
            required
            className="px-[30px] w-[47%] h-[35px] circle rounded-[25px] border-none focus:outline-none color-f-m "
          />
          <select className="px-[30px] w-[47%] h-[35px] circle rounded-[25px] border-none focus:outline-none color-f-m ">
            
            <option value="">Select an option</option>
            <option value="option1">Web & Graphic Design</option>
            <option value="option2">Apps And Web Development</option>
            <option value="option3">SEO and marketing</option>
          </select>
        </div>
        <div className=" mt-[1.8rem]">
        <textarea name="" id="" cols="74" rows="5" placeholder="Message" className=" color-f-m  circle rounded-[20px]  p-[20px] focus:outline-none w-[100%]"></textarea>
        </div>
        <button className=" bg-[#feb000] mt-[1.6rem] px-[30px] py-[8px] rounded-[17px] text-[#fff] font-medium text-[13px]">SUBMIT NOW</button>
      </form>
    </section>
  );
};

export default FormValidation;
