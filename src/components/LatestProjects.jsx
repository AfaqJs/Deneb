import React, {useState} from 'react'
import { work } from "../constants"




const Projects = () => {
  const [categoryState, setCategoryState]  = useState(work)

  const [toggleState, setToggleState] = useState(1)

  const buttonIndex = (index, cataitem) =>{
    setToggleState(index)

    const updateItems = work.filter( (currentElment) => {
      
      return currentElment.category === cataitem
      
    })
    setCategoryState(updateItems)
    console.log(updateItems)
  }




  return (
    <section className=' mt-[4rem]'>
        <div className=' text-center'>
            <h2 className=' smml:text-[45px] xs:text-[32px] text-[25px]  font-semibold '>Our Latest Projects</h2>
            <p className=' pt-[7px] text-[15px] text-[#7a808d] h-all-p '> When unknow printer took a gallery of type  and scramblted <br className='smml:hidden xfm:hidden xs:block'/> it to makea <br className='smml:block hidden'/> type specimen book</p>
        </div>

    </section>
  )
}

export default Projects
