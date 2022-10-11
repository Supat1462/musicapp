import React from 'react'

function CenterMenu() {
    const liStyle = 'px-[0.5rem] hover:cursor-pointer text-[#3f3f46] text-lg tracking-[0.3rem]'
  return (
    <div className='menu flex'>
        <ul className='flex w-full justify-between'>
            <li className={liStyle}>Home</li> 
            <li className={liStyle}>Menu</li> 
            <li className={liStyle}>delivery</li> 
            <li className={liStyle}>help</li> 
        </ul>
    </div>
  )
}

export default CenterMenu