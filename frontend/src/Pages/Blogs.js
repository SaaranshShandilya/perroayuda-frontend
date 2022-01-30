import React, {useEffect} from 'react';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import post1 from '../images/post1.png';
import {BiSearchAlt} from 'react-icons/bi'
import { Footer } from '../Components/Footer';
const Blogs = () => {
    useEffect(() => {
        document.title = 'Blogs - PerroAyuda'
        window.scrollTo(0,0);
    },[])
  return (
  <div>
      <NavBar/>
      <div className="relative">
          <img style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }} src={dog2}></img>
          <div className="bg-zinc-800 text-center bg-opacity-60 ">
          <h1 className="text-white font-bold text-4xl  ml-8 pt-40"> Blogs </h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home / Blogs
          </p>
        </div>
        
      </div>
      <div className="sm:grid sm:grid-cols-3 my-24 sm:mx-36 gap-4">
          <div>
              <div className="text-center my-4 border hover:shadow-xl bg-white p-8">
                  <p className="flex ml-12 text-md font-semibold text-zinc-500">Life around animals<p className="mx-2 text-amber-500 font-bold">-</p>May 8, 2021</p>
                  <p className=" mt-4 font-bold text-zinc-700 text-2xl">Dogs & Anxiety</p>
                  <p className="mt-4 mx-6 text-zinc-500">Dogs are a man’s best friend. But they have some issues which are not addressed and looked after. If dogs bark, wail or behave in an unusual manner they are</p>
                  <p className="flex space-x-4 mx-8 mt-4 "><p className="border hover:bg-amber-400 hover:text-white font-semibold py-2 px-4">animals</p><p className="border hover:text-white font-semibold hover:bg-amber-400 py-2 px-4">anxiety</p><p className="hover:text-white font-semibold hover:bg-amber-400 border py-2 px-4">dogs</p></p>
                  <button className="mt-4 px-4 py-2 bg-amber-400 text-white font-bold rounded-xl ">Read More</button>
              </div>
             
          </div>
          <div>
              <div className="text-center bg-white my-4 hover:shadow-xl border">
                  <img src={post1} alt=''></img>
                  <p className="flex ml-20 mt-6 text-md font-semibold text-zinc-500">Uncategorized<p className="mx-2 text-amber-500 font-bold">-</p>May 23, 2021</p>
                  <p className=" mt-4 mx-8 font-bold text-zinc-700 text-2xl">“Moo may represent an idea, but only the cow knows.”</p>
                  <p className="mt-4 mx-6 text-zinc-500">So today, we are going to know about Cows and beef trading. The cow addresses the giving idea of life to each Hindu. Respecting this delicate creature, who gives more</p>
                  <p className="flex space-x-2 text-md mx-6 mt-4 "><p className="border hover:bg-amber-400 hover:text-white font-semibold py-2 px-4">animal welfare</p><p className="border hover:text-white font-semibold hover:bg-amber-400 py-2 px-4">beef trading</p><p className="hover:text-white font-semibold hover:bg-amber-400 border py-2 px-4">cows</p></p>
                  <button className="mt-4 px-4 py-2 bg-amber-400 mb-4 text-white font-bold rounded-xl ">Read More</button>
              </div>
          </div>
          <div className='text-white'>
              <div className="flex my-4 ">
          <input
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                type="text"
                className="p-2 w-4/5 ml-4 mt-2  border-2 hover:border-black focus:border-blue-400 focus:outline-none"
                placeholder='Search...'
              ></input>
              <button className="text-lg p-4 mt-2 h-1/2 bg-amber-400"><BiSearchAlt/></button>
              </div>
              <p className="text-xl m-4 font-semibold ">RECENT POSTS</p>
              <div className="grid  grid-cols-1 divide-y  mt-4 ml-4">
                  <div className="my-2  text-xl">Dogs & Anxiety</div>
                  <div className="my-2 py-2 text-xl">“Moo may represent an idea, but only the cow knows.”</div>
                  <div className="my-2 py-2 text-xl">TWO IN ONE: A BEST FRIEND & A PET</div>
              </div>
              <p className="text-xl m-4 font-semibold ">RECENT COMMENTS</p>
              <div className="grid grid-cols-1 divide-y  mt-4 ml-4">
                  <div className="my-2  text-xl">Prateek thakur on Monthly Emergency Funds</div>
                  <div className="my-2 py-2 text-xl">MAHALAKSHMI RAMAKRISHNAN on Monthly Emergency Funds</div>
                  <div className="my-2 py-2 text-xl">Suhavna on TWO IN ONE: A BEST FRIEND & A PET</div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
  );
};

export default Blogs;
