import React from 'react'
import Hero from './Hero'
import OurServices from './OurServices'
import Business from './Business'
import Achievements from './Achievements'
import Pricing from './Pricing'
import Review from './Review'
import Blog from './Blog'
import HireUS from './HireUS'
import Footer from './Footer'
import LatestProjects from './LatestProjects'
import ContactUs from './ContactUs'
import Slider from './Slider'
import LatestBlog from './LatestBlog'
import Slides from './Slides'

const Home = () => {
  return (
    <>
  
    <Hero/>
    <Slider/>
    <OurServices/>
    <Business/>
    <Achievements/>
    <LatestProjects/>
    <Slides/>
    <Pricing/>
    <Review/>
    <LatestBlog/>
    <ContactUs/>
    <HireUS/>
    <Footer/>
    
    </>
  )
}

export default Home
