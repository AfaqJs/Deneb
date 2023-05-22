import React, {useState, useRef }from "react";
import { blogs } from "../constants";
import { user, clock, play, rightarrow, search, tickicon } from "../assets";
import CategoryComponent from "./CategoryComponent";

const BlogPage = () => {
  const firstFiveObjects = blogs.slice(0, 5);
  const sectionRef = useRef(null);
  let index = 1

  const [pageindex, sePageindex] = useState(index);
  const [currentstate, setCurrentstate] = useState(firstFiveObjects);
  const nextPage = (count) =>{
    setCurrentstate(blogs.slice(5, 9))

      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      sePageindex(count)
  }
  const prevPage = (count) =>{
    setCurrentstate(blogs.slice(0, 5))
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    sePageindex(count)
  }
  

  return (
    <section className="max-w-[1100px] mx-auto mt-[4rem]">
      <div className=" flex smml:justify-between sm:justify-center flex-wrap smml:flex-nowrap">
        <div className=" w-[730px] smml:w-[650px] md:w-[730px] lg:px-0 px-[15px]" ref={sectionRef}>
          {currentstate.map((item) => (
            <div key={item.id} style={{ marginBottom: "40px" }}>
              <img
                src={item.image}
                alt=""
                className=" rounded-[10px] smml:w-[100%] w-[64%] ss:w-[82%] ssms:w-[98%] sm:w-[100%]"
              />
              <div className=" flex items-center mt-[20px]">
                <div className=" flex text-[14px] text-[#7a808d] items-center mr-[30px]">
                  <img
                    src={clock}
                    alt=""
                    className=" w-[15px] h-[15px] mr-[10px]"
                  />
                  <p> July 21, 2020</p>
                </div>
                <div className=" flex text-[14px] text-[#7a808d] items-center">
                  <img
                    src={user}
                    alt=""
                    className=" w-15px] h-[15px] mr-[10px]"
                  />
                  <p> By Tortoiz</p>
                </div>
              </div>
              <h2 className=" text-[30px] font-semibold leading-[60px]">
                {item.title}
              </h2>
              <p className=" text-[#7a808d] text-[14px] smml:w-[100%] w-[60%]">{item.description}</p>
              <div className=" mt-[5px] services-btn flex items-center justify-start">
                <img src={play} alt="" className=" w-[14px]  mr-[8px]" />
                <h5 className=" fon\t-medium text-[14px]">Read More</h5>
              </div>
            </div>
          ))}
          <div className=" w-[700px] ssms:text-center ">
            <button onClick={()=> prevPage(1)} className={`bg-[#eee] py-1.5 px-3.5 rounded-full mr-[20px] postbuttons text-[#626667] ${pageindex === 1 ? "currentindextab" : ""} `}>
              1
            </button>
            <button className={`bg-[#eee] py-1.5 px-3.5 rounded-full postbuttons mr-[20px] text-[#626667] ${pageindex === 2 ? "currentindextab" : ""} `} onClick={()=> nextPage(2)}>
              2
            </button>
          </div>
        </div>

        <div className=" smml:w-[320px] w-[455px] smml:mt-0 mt-[3rem] smml:mx-0 mx-[15px] ssms:mx-auto">
          <div className=" relative">
            <input
              type="text"
              placeholder="Search..."
              className=" circle p-[20px] pl-[45px] smml:w-[19rem] w-[26rem] h-[35px] rounded-[30px] focus:border-none text-[14px] focus:outline-none"
            />
            <span>
              {" "}
              <img
                src={search}
                alt=""
                className=" cursor-pointer w-[15px] search-icone"
              />
            </span>
            <span>
              {" "}
              <img
                src={rightarrow}
                alt=""
                className=" w-[85px] rounded-[25px] cursor-pointer arrow-icone bg-[#feb000] absolute py-[7px] px-[30px]"
              />
            </span>
          </div>

          <CategoryComponent
            heading="Category"
            field1="Design"
            field2="Development"
            field3="SEO"
            field4="App Design"
            field5="Branding"
           />
          <div className=" relative mt-10 flex items-center">
            <h3 className=" element  pl-4 text-[30px] font-semibold">
              Recent Post
            </h3>
          </div>

          <div className=" mt-[10px] ">
            {firstFiveObjects.map((item) => (
              <div
                key={item.id}
                style={{ marginBottom: "20px" }}
                className=" smml:h-[105px]  h-[137px] rounded-[12px] circle1"
              >
                <div className=" flex items-center ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[40%] mt-[8px] ml-[15px] rounded-[8px]"
                  />
                  <div>
                    <h3 className=" text-[16px] px-[10px] mt-[8px]">
                      {item.title}
                    </h3>
                    <p className=" text-[14px] px-[10px] mt-[4px] text-[#feb000]">
                      July 21, 2020
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" relative mt-8 flex items-center ">
            <CategoryComponent
              heading="Archives"
              field1="January"
              field2="Fabruary"
              field3="March"
              field4="April"
              field5="April"
            />
          </div>
          <div className=" relative mt-8 flex items-center">
            <h3 className=" element  pl-4 text-[30px] font-semibold">Tages</h3>
          </div>
          <div>
            <ul className="mt-[1rem]">
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  Business{" "}
                </div>
              </li>
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  News{" "}
                </div>
              </li>
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  Strategy{" "}
                </div>
              </li>
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  Website{" "}
                </div>
              </li>
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  Brand{" "}
                </div>
              </li>
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  Mission{" "}
                </div>
              </li>
              <li className=" li-tags border-solid border-[1px] rounded-[30px]">
                <div className=" text-[#8e8e8f] flex text-[13px] items-center p-[5px] pr-[12px]">
                  <span className=" bg-[#cccccc] rounded-[50%] w-[20px] h-[20px] mr-[10px]"></span>{" "}
                  Business{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
