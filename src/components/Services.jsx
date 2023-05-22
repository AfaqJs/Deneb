import React from 'react'
import SHero from './SHero'
import SOurServices from './SOurServices'
import SworkFlow from './SworkFlow'
import Pricing from './Pricing'
import Review from './Review'
import ContactUs from './ContactUs'
import HireUS from './HireUS'
import Footer from './Footer'


const Services = () => {
  return (
    <>
    <SHero value="Our Services"/>
    <SOurServices/>
    <SworkFlow/>
    <Pricing/>
    <Review/>
    <ContactUs/>
    <HireUS/>
    <Footer/>
    </>
  )
}

export default Services
