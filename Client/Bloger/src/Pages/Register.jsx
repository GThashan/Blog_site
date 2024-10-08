import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='bg-[#81daca] h-[100vh] flex justify-center items-center'>
      
    <div className='bg-white w-[60%] lg:w-[30%] mx-auto p-5 h-auto rounded-lg shadow-lg '>
    <h1 className='text-center font-bold text-[#005451] text-[25px]'>Register</h1>
    <form action="">
     <div>
     <input type="text"  placeholder='Username' className='outline-none  w-full border-b-2 my-4' />
     </div>
     <div>
     <input type="text"  placeholder='Email' className='outline-none  w-full border-b-2 my-4' />
     </div>
     <div>
     <input type="text"  placeholder='Password'  className='outline-none  w-full border-b-2 my-4' />
     </div>
      <button className='bg-[#005451] text-white w-full p-2 rounded-lg shadow-lg my-3'>Register</button>
      <p className='text-center text-red-700 my-4'>Error occurr !</p>
      <p className='text-center'>Already have an account ? <Link to='/login'>Login</Link></p>
    </form>
    </div>
   
 </div>
  )
}

export default Register
