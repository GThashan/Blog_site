import React from 'react'

function Home() {
   const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  
  return (
    <div>
    {posts.map((post, index) => {
      return (
        <div
          key={index}
          className={`sm:grid sm:grid-cols-2 mx-10 my-10 gap-[100px] items-center p-4 bg-slate-200 ${
            index % 2 === 0 ? '' : 'grid-cols-2-reverse'
          }`}
        >
         
          <div className={`${index % 2 === 0 ? '' : 'order-2'}`}>
            <h1 className="text-[45px] font-bold">{post.title}</h1>
            <p>{post.desc}</p>
            <button className='p-3 border my-3 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white'>Read more</button>
          </div>
  
          <div className={`${index % 2 === 0 ? '' : 'order-1'}`}>
          
          <img
            src={post.img}
            alt=""
            className="w-[300px] h-[300px] object-cover  cursor-pointer"
          />
        
          </div>
         
        </div>
      );
    })}
  </div>
  
  );
}

export default Home;
