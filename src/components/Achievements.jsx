import React from "react";
import { Projects, achieve, Active, Exerience } from "../assets";

const Achievements = () => {
  return (
    <section className=" smml:mt-[6rem] max-w-[1100px] mx-auto">
      <div className=" flex smml:justify-between ssms:justify-center flex-wrap smml:px-[15px] lg:px-0">
        <div className=" achive-text xs:w-[52%] smml:w-[44%] smml:mr-[1rem] smml:mt-[6rem] mt-[4rem] text-justify smml:text-justify ssms:text-center">
          <h2 className=" h-over h-over-w md:text-[42px] text-[32px] font-semibold smml:leading-[54px]  ssms:w-[100%] w-[23rem] xs:ml-[20px] ml-[15px] ssms:ml-0  ">
            Over 500+ Completed work & Still Counting
          </h2>
          <p className="h-over  text-[15px] py-[30px] smml:max-w-[500px] text-[#7a808d]  xs:ml-[20px] ml-[15px] md:ml-0 w-[26rem] ssms:w-[100%] ssms:ml-0">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus at orci non risus luctus commodo.
            Ut nibh tellus, faucibus nec gravida.
          </p>
          <p className=" h-over pb-[25px] text-[15px] text-[#7a808d] smml:max-w-[500px] xs:ml-[20px] ml-[15px] md:ml-0 w-[26rem] ssms:w-[100%] ssms:ml-0">
            Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel
            non ex. Quisque a finibus justo.
          </p>
        </div>

        <div className="   xs:flex mx-auto smml:mx-0 smml:ml-[1rem]  ssms:pr-0 pr-[15px] w-[500px] smml:w-[460px]  lg:w-[550px] smml:justify-end justify-center">
          <div className=" achive-circle-c flex flex-col xs:mr-[3rem]">
            <div className="  circle  lg:h-[221px] lg:w-[221px] h-[200px] w-[200px] bg-[#fff] rounded-[100%] text-center shadow-lg border-[3px]  border-[#fff] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-300">
              <img
                src={Projects}
                alt=""
                className=" w-[30px] mx-auto pt-[52px]"
              />
              <h3 className=" text-[30px] text-[#feb000] font-semibold pt-[5px]">
                300+
              </h3>
              <p className=" text-[15px] text-[#7a808d]">Projects Done</p>
            </div>
            <div className=" mt-[50px] circle  lg:h-[221px] lg:w-[221px] h-[200px] w-[200px] bg-[#fff] rounded-[100%] text-center shadow-lg border-[3px]  border-[#fff] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-500">
              <img
                src={achieve}
                alt=""
                className=" w-[30px] mx-auto pt-[52px]"
              />
              <h3 className=" text-[30px] text-[#feb000] font-semibold pt-[5px]">
                250+
              </h3>
              <p className=" text-[15px] text-[#7a808d]">Projects Done</p>
            </div>
          </div>

          <div className="achive-circle-c flex flex-col mt-[2rem] smml:justify-end">
            <div className="  lg:h-[221px] lg:w-[221px] h-[200px] w-[200px] circle bg-[#fff] rounded-[100%] text-center shadow-lg border-[3px]  border-[#fff] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-500">
              <img
                src={Active}
                alt=""
                className=" w-[30px] mx-auto pt-[52px]"
              />
              <h3 className=" text-[30px] text-[#feb000] font-semibold pt-[5px]">
                200+
              </h3>
              <p className=" text-[15px] text-[#7a808d]">Active Projects</p>
            </div>
            <div className="mt-[50px]   lg:h-[221px] lg:w-[221px] h-[200px] w-[200px] circle bg-[#fff] rounded-[100%] text-center shadow-lg border-[3px]  border-[#fff] hover:border-dashed hover:border-[#feb000] hover:drop-shadow-lg hover:duration-500">
              <img
                src={Exerience}
                alt=""
                className=" w-[30px] mx-auto pt-[52px]"
              />
              <h3 className=" text-[30px] text-[#feb000] font-semibold pt-[5px]">
                5+
              </h3>
              <p className=" text-[15px] text-[#7a808d]">Years Exerience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
