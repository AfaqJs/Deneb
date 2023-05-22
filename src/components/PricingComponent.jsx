import React from 'react'
import { pen } from '../assets'

const PricingComponent = () => {
  return (
    <div>
      <div className=' '>
                <img src={pen} alt="" className=' mx-auto w-[22%] pt-[25px]'/>
                <h3 className=' text-center text-[30px] font-semibold my-[17px]'>Basic</h3>
                <div className=' list'>
                    <ul className=' ul-pricing text-center text-[15px]'>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>UI/UX</li>
                        <li>HTML/CSS</li>
                        <li>SEO Marketing</li>
                        <li>Business Analysis</li>
                    </ul>
                </div>
                <h2 className=' text-[40px] text-black font-bold text-center my-[16px]'>$75
                    <span className=' text-[#feb000] font-semibold text-[28px]'>/ Month</span>
                </h2>
                <button className=' bg-[#feb000] text-[#fff] font-semibold text-[15px] py-[10px] px-[35px] rounded-[25px] mb-[25px]'> START NOW</button>
            </div>
    </div>
  )
}

export default PricingComponent
