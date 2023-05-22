import React from 'react'
import { banner2 } from '../assets'

const HomePageSlider = (props) => {
  return (
    <div className=' '>
      <div className={` flex flex-row  items-center w-[550px] my-[2rem] mx-auto ss:w-[550px] ssms:w-[610px] sm:w-[700px] smml:w-[920px]   smml:flex-nowrap flex-wrap lg:px-0 px-[15px] `}>
        <div className="header-text z-[1] mr-auto w-[550px]">
          <h2 className=" text-black smml:text-[50px] smml:leading-[60px] leading-[34px] text-[30px] ">
            {props.heading}<br />
            <span className=" text-[#feb000] smml:text-[50px] text-[30px] font-semibold ">
              {" "}
              {props.agency}
            </span>
          </h2>
          <h5 className=" text-[#011a3e] smml:text-[21px] text-[20px] mt-[8px]">
            We Are Professional Freelance Web Designer
          </h5>
          <p className="w-[400px] text-[#7a808d] mt-[7px] text-[15px]">
            Nulla id euismod massa. Donec accumsan semper lacus, vestibulum
            gravida ante sed eu lacus et diam lacinia.
          </p>
          <button className=" mt-[25px] py-[10px] px-[25px] rounded-[20px] text-[14px] bg-[#feb000] text-white font-medium">
            HIRE ME
          </button>
        </div>
        <div className=" z-[1] mt-[1rem] smml:mt-[0] w-[550px]">
          <img src={props.image} alt="" className=" w-[86%] ss:w-[100%]" />
        </div>
      </div>
    </div>
  )
}

export default HomePageSlider
