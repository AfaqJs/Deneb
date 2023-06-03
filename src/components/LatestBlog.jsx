import React from "react";
import { blog } from "../constants";
import { play } from "../assets";

const Blog = () => {
  return (
    <section className=" max-w-[1100px] mt-[3rem] mx-auto">
      <div className=" text-center">
        <h2 className=" smml:text-[45px] xs:text-[32px] text-[25px] font-semibold ">Latest Blog</h2>
       <p className=' pt-[7px] text-[15px] text-[#7a808d]'> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden xfm:hidden xs:block'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
      </div>

      <div className=" flex justify-between flex-wrap mt-[2.5rem]">
        {blog.map((content) => (
          <div key={content.date} className="w-[335px] smml:mb-0 mb-[25px] circle1 mx-auto ">
            <img src={content.image} alt="" className="  rounded-t-lg" />
            <div className=" p-[20px]">
              <h4 className=" text-[15px] text-[#feb000]">{content.date}</h4>
              <h2 className=" text-[20px] font-semibold py-[6px]">
                {content.title}
              </h2>
              <p className=" text-[15px] text-[#7a808d]">
                {content.description}
              </p>
              <div className=" mt-[15px] services-btn flex items-center">
                <img
                  src={play}
                  alt=""
                  className=" w-[13px] h-[13px] mr-[8px]"
                />
                <h5 className=" font-medium text-[15px]">READ MORE</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
