import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
    // button
    const buttonstyle = 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
    // header
    const headerstyle = 'bg-[#270049] flex items-center justify-between px-[5rem] py-[1.5rem] text-[1rem]'
  return (
    <div className={headerstyle}>
        <img src={require("../img/Asset 1.png")} alt="" className='logo w-20' />
        <CenterMenu />
        <div className='buttons flex'>
            <button className={buttonstyle}>Sign up</button>
            <button className={buttonstyle}>Log in</button>
        </div>
    </div>
  )
}

export default Header