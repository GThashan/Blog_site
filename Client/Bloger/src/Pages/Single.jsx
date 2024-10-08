import React from 'react'

function Single() {
  return (
    <div className="grid grid-cols-4 gap-4 mx-10">
 
    <div className="col-span-3  p-4">
      <img src="https://www.shutterstock.com/image-photo/young-woman-working-on-computer-600nw-1711024264.jpg" alt="" 
      className='w-full h-[450px]'
      />
      <div className='mt-7 flex items-center gap-3'>
        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt=""
        className='w-[50px] h-[50px] rounded-full'
        />
       <div>
        <h1 className='font-bold text-[15px]'>Gamage Hashan</h1>
        <p>posted 2 days ago</p>
       </div>
       <div className='flex items-center gap-2'>
        <img src="https://cdn-icons-png.freepik.com/256/4980/4980658.png?semt=ais_hybrid" alt="" 
        className='w-[30px] h-[30px] rounded-full'
        />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwCMcm3xdAYW2bE70Pyng7GwYlb7zF0-vHQ&s" alt="" 
         className='w-[30px] h-[30px] rounded-full'
        />
       </div>
      </div>

      <div>
        <h1 className='font-bold text-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea recusandae soluta iure dicta autem accusamus asperiores in eos, perspiciatis, impedit, laborum veritatis officia. Molestias repellat aspernatur voluptas optio atque expedita, suscipit vel voluptatibus neque explicabo provident labore quo consequuntur ipsa veniam nemo porro eius, iure voluptatem fugiat dolorem repellendus minus perspiciatis dolores. Labore excepturi, veniam facilis deserunt a perspiciatis architecto cum harum rem fugiat laborum tenetur officiis nostrum eos recusandae esse quisquam consequatur inventore aut dolore totam deleniti!
           Enim a nisi veniam velit fugiat, numquam molestias optio libero, delectus voluptas eaque natus repellendus explicabo maiores corporis consectetur! Sequi, maiores!
           <br></br>
           <br></br>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea recusandae soluta iure dicta autem accusamus asperiores in eos, perspiciatis, impedit, laborum veritatis officia. Molestias repellat aspernatur voluptas optio atque expedita, suscipit vel voluptatibus neque explicabo provident labore quo consequuntur ipsa veniam nemo porro eius, iure voluptatem fugiat dolorem repellendus minus perspiciatis dolores. Labore excepturi, veniam facilis deserunt a perspiciatis architecto cum harum rem fugiat laborum tenetur officiis nostrum eos recusandae esse quisquam consequatur inventore aut dolore totam deleniti! Enim a nisi veniam velit fugiat, numquam molestias optio libero, delectus voluptas eaque natus repellendus explicabo maiores corporis consectetur! Sequi, maiores!
           </p>
      </div>
    </div>
  
   
    <div className="col-span-1">
      <h1 className='font-bold text-center text-gray-600 mb-3 text-[20px]'>Latest Post</h1>
      <div className='bg-slate-300 p-2 items-center mb-2 rounded-lg'>
        <img src="https://i0.wp.com/www.voxonicstudio.ie/wp-content/uploads/brizy/imgs/he-image-features-a-large-colorful-blog-icon-in-the-center-with-the-word-Blog-jpg-499x281x62x0x374x281x1700236821.jpg?w=1290&ssl=1" alt="" />
        <h1 className='font-bold text-left text-[25px]'>Lorem ipsum dolor sit amet </h1>
        <button className='p-2 border my-3 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white text-center'>Read more</button>
      </div>
      <div className='bg-slate-300 p-2 items-center mb-2 rounded-lg'>
        <img src="https://i0.wp.com/www.voxonicstudio.ie/wp-content/uploads/brizy/imgs/he-image-features-a-large-colorful-blog-icon-in-the-center-with-the-word-Blog-jpg-499x281x62x0x374x281x1700236821.jpg?w=1290&ssl=1" alt="" />
        <h1 className='font-bold text-left text-[25px]'>Lorem ipsum dolor sit amet </h1>
        <button className='p-2 border my-3 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white text-center'>Read more</button>
      </div>
      <div className='bg-slate-300 p-2 items-center mb-2 rounded-lg'>
        <img src="https://i0.wp.com/www.voxonicstudio.ie/wp-content/uploads/brizy/imgs/he-image-features-a-large-colorful-blog-icon-in-the-center-with-the-word-Blog-jpg-499x281x62x0x374x281x1700236821.jpg?w=1290&ssl=1" alt="" />
        <h1 className='font-bold  text-[25px] text-left'>Lorem ipsum dolor sit amet </h1>
        <button className='p-2 border my-3 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white text-center'>Read more</button>
      </div>
    
    </div>
  </div>
  
  )
}

export default Single
