import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {

  // header
  const headerstyle = 'flex items-center justify-between px-[8rem] py-[3rem] text-[1rem]'
  return (
    <div className={headerstyle}>
      <div className='logo flex items-center cursor-pointer'>
        <img src={require("../img/logo.png")} alt="" className='w-[30px]'/>
        <span class="ml-[0.7rem] text-[#3f3f46] cursor-pointer font-bold tracking-[0.3rem] text-lg">Your bowl</span>
      </div>

      <CenterMenu />
      <div className='form flex'>
      <ul className='flex w-full justify-between text-[#3f3f46] cursor-pointer text-lg tracking-[0.2rem]'>
            <li className="mx-[0.5rem]">your account</li> 
            <li className="mx-[0.5rem]">create account</li> 
        </ul>
      </div>
    </div>
  )
}

export default Header