import React, { useState } from "react";
import { services, work } from "../constants";

const PLatextProjects = () => {
  let index = 1;

  const [count, setCount] = useState(index);
  const [workcontent, setWorkcontent] = useState(work);

  const fliterItem = (e, categoryItem) => {
    const updateCatagory = work.filter((curentCatagory) => {
      return curentCatagory.category === categoryItem;
    });
    setWorkcontent(updateCatagory);
    setCount(e);
  };

  return (
    <section className="mt-[5rem] max-w-[1100px] mx-auto smml:px-0 px-[15px]">
      <div className=" text-center">
        <h2 className=" smml:text-[45px] text-[32px] font-semibold ">Our Latest Projects</h2>
        <p className=' pt-[7px] text-[15px] text-[#7a808d]'> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
      </div>

      <div
        className={`  my-[2rem] text-[13px] font-medium max-w-[600px] mx-auto flex justify-between flex-wrap`}
      >
        <button
          className={`${
            count === 1 ? "filer-menu" : ""
          } py-[7px] px-[20px] rounded-[20px]`}
          onClick={() => {
            fliterItem(1);
            setWorkcontent(work);
          }}
        >
          WEB DESIGN
        </button>
        <button
          className={`${
            count === 2 ? "filer-menu" : ""
          } py-[7px] px-[20px] rounded-[20px]`}
          onClick={() => fliterItem(2, "WEB DEVELOPMENT")}
        >
          WEB DEVELOPMENT
        </button>
        <button
          className={`${
            count === 3 ? "filer-menu" : ""
          } py-[7px] px-[20px] rounded-[20px]`}
          onClick={() => fliterItem(3, "BRANDING")}
        >
          BRANDING
        </button>
        <button
          className={`${
            count === 4 ? "filer-menu" : ""
          } py-[7px] px-[20px] rounded-[20px]`}
          onClick={() => fliterItem(4, "WEB DEVELOPMENT")}
        >
          SEO
        </button>
        <button
          className={`${
            count === 5 ? "filer-menu" : ""
          } py-[7px] px-[20px] rounded-[20px]`}
          onClick={() => fliterItem(5, "APPS")}
        >
          APPS
        </button>
      </div>

      <div className=" flex flex-wrap justify-between">
        {workcontent.map((content) => (
          <div
            key={content.id}
            className=" mb-[20px] smml:w-[32%] w-[45%] rounded-[10px]  pb-[30px]  circle1 "
          >
            <img src={content.Image} alt="" className=" rounded-t-lg" />
            <h2 className=" text-[18px] smml:text-[22pxpx] font-medium mt-[15px] ml-[20px]">
              {content.title}
            </h2>
            <p className=" ml-[20px] text-[15px] text-[#7a808d]">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PLatextProjects;
