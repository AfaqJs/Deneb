import React from 'react'
import { people1, people2, people3, people4, people5, people6, people7, people8, team1, team2 } from '../assets'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <>
    <div className=' text-center relative w-[100%] mt-[5rem]'>
            <h2 className=' smml:text-[45px] xs:text-[32px] text-[25px] font-semibold '>What People Say</h2>
            <p className=' pt-[7px] text-[15px] text-[#7a808d]'> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden xfm:hidden xs:block'/> it to makea <br className='smml:block hidden'/> type specimen book</p>

            <div className=' absolute top-[72px] left-[-20px] z-0'>
              <img src={team1} alt="" />
            </div>
        </div>
    <section className=' max-w-[1100px] mx-auto'>
       
        

        <div className=' relative mb-[-3.4rem] px-[15px]'>
            <div className=' max-w-[700px] mx-auto flex justify-between mt-[2rem]'>
                <img src={people1} alt="" className='  smml:w-[12%] opacity-[50%]  pt-[30px] z-10' />
                <img src={people2} alt="" className='  smml:w-[13%] h-[13%] opacity-[50%]' />
                <img src={people3} alt="" className='  smml:w-[12%] opacity-[50%]  pt-[30px]' />
            </div>

            <div className=' mt-[3rem]'>
              <ReviewSlider/>
            </div>
            
           
              <div className=' flex flex-row justify-between  relative bottom-[23rem]'>
                <img src={people4} alt="" className=' smml:w-[10%] w-[15%] h-[15%] smml:h-[10%] opacity-[50%]'/>
                <img src={people5} alt="" className=' smml:block hidden w-[8%] h-[8%] opacity-[50%]' />
                <img src={people8} alt=""  className=' smml:block hidden w-[8%] h-[8%] opacity-[50%]'/>
                <img src={people6} alt="" className=' smml:w-[10%] w-[15%] h-[15%] smml:h-[10%] opacity-[50%]'/>
              </div>      
        </div>

        
    </section>
    </>
  )
}

export default Review
