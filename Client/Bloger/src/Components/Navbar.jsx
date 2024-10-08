import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center mx-10'>
      <div>
       <img src="https://www.logoai.com/uploads/output/2021/12/21/a40b79883497c9cf19e38b2bea41a4a7.jpg " alt="" className='w-[120px] h-[120px]' />
      </div>
      <div className='flex gap-3 uppercase '>
        <Link className='hover:underline' to='/'>Art</Link>
        <Link className='hover:underline' to='/'>Science</Link>
        <Link className='hover:underline' to='/'>Technology</Link>
        <Link className='hover:underline' to='/'>Cinema</Link>
        <Link className='hover:underline' to='/'>Design</Link>
        <Link className='hover:underline' to='/'>Food</Link>
        <Link className='hover:underline' to='/'>Join</Link>
        <Link className='hover:underline' to='/'>Logout</Link>
        <div className='hover:bg-slate-600 px-8 py-2 hover:text-white border rounded-full'>
        <Link to='/'>Write</Link>
        </div>
      
    

      </div>
     
    </div>
  )
}

export default Navbar
