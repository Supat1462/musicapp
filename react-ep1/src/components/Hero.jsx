import React from 'react'
import DownloandAds from './DownloandAds'



function Hero() {
  return (
    <div className='wrapper bg-[#32045A] flex items-center justify-between px-[5rem] rounded-b-[2.5rem] w-full h-[35rem] relative'>
        <div className='headings flex flex-col items-start justify-center h-full text-[3rem]'>
            <span>
                Experience The
            </span>
            <span><b>Best Quality Music</b></span>
            <span className='text-[.8rem] text-[#707b8b]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perferendis?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <div className='text-[.5rem] mt-[1.5rem]'>Download app IOS And Androind now</div>
            <DownloandAds />
        </div>
        


        <div className='images'>Images</div>
    </div>
  )
}

export default Hero