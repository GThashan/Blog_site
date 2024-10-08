import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center mx-10'>
      <div>
       <img src="https://www.logoai.com/uploads/output/2021/12/21/a40b79883497c9cf19e38b2bea41a4a7.jpg " alt="" className='w-[120px] h-[120px]' />
      </div>
      <div className='flex gap-3 uppercase '>
        <Link className='hover:underline' to='/single'>Art</Link>
        <Link className='hover:underline' to='/single'>Science</Link>
        <Link className='hover:underline' to='/single'>Technology</Link>
        <Link className='hover:underline' to='/single'>Cinema</Link>
        <Link className='hover:underline' to='/single'>Design</Link>
        <Link className='hover:underline' to='/single'>Food</Link>
        <Link className='hover:underline' to='/single'>Join</Link>
        <Link className='hover:underline' to='/single'>Logout</Link>
        <div className='hover:bg-slate-600 px-8 py-2 hover:text-white border rounded-full'>
        <Link to='/write'>Write</Link>
        </div>
      
    

      </div>
     
    </div>
  )
}

export default Navbar
