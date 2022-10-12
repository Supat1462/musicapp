import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {

  // header
  const headerstyle = 'flex items-center justify-between px-[8rem] py-[3rem] text-[1rem]'
  const liStyle = 'mx-[0.5rem] hover:text-[#9ca3af]'

  return (
    <div className={headerstyle + ''}>
      <div className='logo flex items-center cursor-pointer'>
        <img src={require("../img/logo.png")} alt="" className='w-[30px]' />
        <span class="ml-[0.7rem] text-[#3f3f46] cursor-pointer font-bold tracking-[0.3rem] text-lg">Your bowl</span>
      </div>

      <CenterMenu />
      <div className='account lg:hidden'>
        <ul className='flex w-full justify-between text-[#3f3f46] cursor-pointer text-lg tracking-[0.2rem]'>
          <li className={liStyle}>your account</li> <span className='text-[#3f3f46] text-lg tracking-[0.3rem]'>|</span>
          <li className={liStyle}>create account</li>
        </ul>
      </div>
    </div>
  )
}

export default Header