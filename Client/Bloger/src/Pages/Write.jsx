
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = useState('');
  return (
    <div className='grid grid-cols-4 gap-3 mx-10 mb-8'>
      <div className='col-span-3'>
        <input type="text" placeholder='Type Title Here' className='border w-full my-2 p-3 outline-none' />
        <ReactQuill theme="snow" value={value} onChange={setValue} className='w-full h-[50%]'/>;
      </div>
      <div className='col-span-1'>
        <div className='border p-3 rounded-lg mb-3'>
          <h1 className='text-center font-bold text-gray-700 text-[20px]'>Publish</h1>
          <ul>
            <li>Status : Draft</li>
            <li>Visibility : Public</li>
            <label htmlFor="">Upload Image</label>
             <input type="file" placeholder='Upload Images' />
          </ul>
          <button>Save as draft</button>
          <button>Update</button>

        </div>
        <div className='border p-3 rounded-lg'>
          <h1 className='text-center font-bold text-gray-700 text-[20px]'>Category</h1>
          <div className='flex gap-2 items-center'>
          <input type="radio" value="Science"/>
          <label htmlFor="">Science</label>
          </div>
          <div className='flex gap-2 items-center'>
          <input type="radio" value="Technology"/>
          <label htmlFor="">Technology</label>
          </div>
          <div className='flex gap-2 items-center'>
          <input type="radio" value="Cinema"/>
          <label htmlFor="">Cinema</label>
          </div>
          <div className='flex gap-2 items-center'>
          <input type="radio" value="Design"/>
          <label htmlFor="">Design</label>
          </div>
          <div className='flex gap-2 items-center'>
          <input type="radio" value="Food"/>
          <label htmlFor="">Food</label>
          </div>
           
         
         
          
         

        </div>

      </div>
      
      
    </div>
  )
}

export default Write
