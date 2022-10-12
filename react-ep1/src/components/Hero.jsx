import React from 'react'
import DownloandAds from './DownloandAds'



function Hero() {
  const containerStyle = 'wrapper flex items-center justify-between px-[8rem] py-[10rem] text-[1rem] bg-white'
  const textStyleL = 'text-[4rem] items-end tracking-[0.5rem] md:flex'
  const textStyleR = 'text-[1.4rem] items-start tracking-[0.5rem] mb-[1rem] md:flex'

  return (
    <div className={containerStyle + ''}>
      <div className='headings flex flex-col items-end justify-center h-full text-[#3f3f46] pl-[8rem] w-[25%]'>
        <span className='text-[1rem] items-end tracking-[0.2rem]'>
          New arrivals
        </span>
        <span className={textStyleL + ' text-[#65a30d]'}>vegan</span>
        <span className={textStyleL}>
          pokebowl
        </span>
        <DownloandAds />
      </div>

      <div className='images flex justify-center w-[50%]'>
        <img src={require("../img/food.png")} alt="" className='w-[50%] z-10' />
        <div className="cricle w-[300px] h-[300px] bg-yellow-200 flex absolute top-[29%] left-[43%] -z-0 rounded-full opacity-25">
        </div>
      </div>


      <div className='orders flex flex-col items-start justify-center h-full text-[#3f3f46] pr-[8rem] w-[25%]'>
        <span className={textStyleR + ' text-[#65a30d]'}>current dish</span>
        <p className='text-[0.7rem] normal-case'>
          Drescription of the dish<br />
          Ingredients and more description
        </p>
        <h1 className='text-[4.5rem]'>$12</h1>

        <button type="button" class="text-white hover:text-[#65a30d] bg-[#65a30d] border border-[#65a30d] hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-4 py-2 text-center my-[1rem] rounded-full uppercase dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">oreder now</button>
      </div>

    </div>





  )
}

export default Hero