import React from 'react'

function CenterMenu() {
  const liStyle = 'px-[0.5rem] hover:cursor-pointer text-[#3f3f46] text-lg tracking-[0.3rem] hover:text-[#9ca3af]'
  return (
    <div className='menu flex'>
      <ul className='flex w-full justify-between md:hidden'>
        <li className={liStyle}>Home</li> <span className='text-[#3f3f46] text-lg tracking-[0.3rem]'>|</span>
        <li className={liStyle}>Menu</li> <span className='text-[#3f3f46] text-lg tracking-[0.3rem]'>|</span>
        <li className={liStyle}>delivery</li> <span className='text-[#3f3f46] text-lg tracking-[0.3rem]'>|</span>
        <li className={liStyle}>help</li> <span className='text-[#3f3f46] text-lg tracking-[0.3rem]'>|</span>
      </ul>

      <div className="icons md:flex tablet:hidden">
        <i class="fa-solid fa-bars text-[#3f3f46] text-[1.7rem]"></i>
      </div>
    </div>
  )
}

export default CenterMenu