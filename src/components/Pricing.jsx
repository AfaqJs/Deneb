import React from 'react'
import { pen } from '../assets'
import PricingComponent from './PricingComponent'

const Pricing = () => {
  return (
    <section className=' mt-[4rem] max-w-[1100px] mx-auto'>
        <div className=' text-center'>
            <h2 className=' smml:text-[45px] xs:text-[32px] text-[25px]  font-semibold '>Afforable Pricing</h2>
            <p className=' pt-[7px] text-[15px] text-[#7a808d] h-all-p '> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden xfm:hidden xs:block'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
        </div>

        <div className=' flex justify-between flex-wrap mt-[3rem] ssms:px-[15px]'>
            <div className=' w-[300px] sm:w-[320px] bg-white circle text-center border-dashed border-[3px] border-[#fff] hover:border-[#feb000] mx-auto'>
            <PricingComponent/>
            </div>
            <div className='pricing-b-two sm:w-[320px] w-[300px] bg-white circle text-center border-dashed border-[3px] border-[#fff] hover:border-[#feb000] mx-auto'>
            <PricingComponent/>
            </div>
            <div className='pricing-b-three w-[300px] sm:w-[320px] bg-white circle text-center border-dashed border-[3px] border-[#fff] hover:border-[#feb000] mx-auto'>
            <PricingComponent/>
            </div>
        </div>
    </section>
  )
}

export default Pricing
