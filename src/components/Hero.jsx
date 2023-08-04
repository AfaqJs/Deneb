import React, {useState, useRef} from 'react'
import {banner1, banner2, logo, headerShape, menu, close} from '../assets'
import Slider from './Slider'
 import { Link } from 'react-router-dom'


const Hero = () => {
  const navRef = useRef()
  
  const [toggle, setToggle] = useState(true);
  const changeIcon = ()=> {
    if(toggle === true){
      setToggle(false)
      navRef.current.style.transform = "translateX(0)"
    }
    else{
      setToggle(true)
      navRef.current.style.transform = "translateX(-100%)"
    }
    
    
  }
 
  return (
    <>
    <section className=' relative z-[100]  pt-[2rem]'>
        <nav  className=' nav-bar smml:px-[2rem] md:px-0 flex items-center flex-wrap smml:w-[942px] lg:w-[1100px]  mx-auto nav-menu-w  xs:w-[495px] ss:w-[550px] ssms:w-[610px] sm:w-[700px]  '>
            <img src={logo} alt=""  className=' site-logo mr-auto smml:w-[12%] w-[24%]sm:w-[11px]'/>
            <div className='menu hidden smml:block '>
              <ul className=' list-none flex  font-poppins text-[13px] font-medium '>
                <li className=' !pl-0'><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li className=''><Link to="/Contact">Contact Us</Link></li>
              </ul>
            </div>
            <img onClick={changeIcon} src={`${toggle === true ? menu : close}`} alt="" className='w-[25px] smml:hidden'/>
            <button className=' hidden smml:block bg-[#feb000] px-[27px] py-[7px] text-white rounded-[30px]'><Link to="/Contact">Hire Us</Link></button>
      </nav>
      <div className=' menu2 text-[#fff]' ref={navRef}>
              <ul className=' list-none inline-block  text-[15px] font-medium '>
                <li className=' '><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li className='!pb-0'><Link to="/Contact">Contact Us</Link></li>
                <button className=' mt-[20px] z-[100]  smml:hidden bg-[#FEB000] px-[27px] py-[7px] text-white rounded-[30px]'><Link to="/Contact">Hire Us</Link></button>
              </ul>
             
            </div>      
    </section>
    </>
  )
}

export default Hero
