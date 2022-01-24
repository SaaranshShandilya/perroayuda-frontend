import React, {useEffect} from 'react';
import NavBar from '../Components/Navbar'
import dog2 from '../images/dog2.png';
import donate1 from '../images/donate1.png';
import ReactStars from "react-rating-stars-component";
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import donate2 from '../images/donate2.png'
import { Footer } from '../Components/Footer';
const Donate = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const [quantity, setQuantity] = React.useState(1)
      const [review, setReview] = React.useState('')
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
          <h1 className="text-white font-bold text-4xl ml-8 pt-40"> Donate </h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home / Donate
          </p>
        </div>
        
      </div>
      <div className='sm:grid sm:grid-cols-2 my-20 sm:mx-40'>
          <div className='text-center'><img src={donate1} alt='' className='w-5/6 mx-auto'></img></div>
          <div>
              <p className='text-zinc-600 font-bold text-2xl'>Monthly Emergency Funds</p>
              <p><ReactStars
                    count={5}
                    value={4}
                    size={28}
                    activeColor="#ffd700"
                /></p>
                <p className="mt-8 text-amber-400 text-3xl">₹100.00</p>
                <div className="sm:flex  mt-8 space-y-3  sm:space-x-3">
                    <button className='flex text-xl bg-blue-900 text-white py-2 px-8 rounded-xl'><FaFacebookF className='mr-5 mt-1'/> Share</button>
                    <button className='flex text-xl bg-cyan-500 text-white py-2 px-8 rounded-xl'><BsTwitter className='mr-5 mt-1'/> Tweet</button>
                    <button className='flex text-xl bg-red-700 text-white py-2 px-8 rounded-xl'><BsPinterest className='mr-5 mt-1'/> Pin</button>
                </div>
                <p className='mt-8 text-lg'>We are rescuing strays on daily basis and to clear out the bills we need your help, so we would like to request you to kindly donate a nominal amount of ₹100 towards this social cause and become our helping hand.</p>
                <div className='mt-6 flex'>
                    <input className="border-2 px-2 w-20  py-2" value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number"></input>
                    <button className="text-white bg-amber-400 hover:bg-cyan-500 px-3 ml-4 rounded-lg py-2 text-xl">Add to cart</button>
                </div>
                <p className='mt-4 text-md font-bold flex text-zinc-800'>Category: <p className='ml-2 text-zinc-600'>Donation</p></p>
          </div>
      </div>

      <div className='grid grid-cols-1 mx-auto divide-y'>
          <div > </div>
          <div className='text-center pt-8 text-amber-400 text-3xl  font-bold'>Reviews</div>
      </div>
      <p className='mt-8 sm:mx-40 text-xl text-zinc-700 font-bold'>1 Review For Monthly Emergency Funds</p>

      <div className='sm:flex sm:mx-44 my-4 '>
          <img className='mt-16 border mx-auto' src={donate2} alt=''></img>
          <div className='border w-full ml-4'>
              <p className='sm:flex mt-8 ml-12 text-lg text-zinc-700 font-semibold'>Sahil Rajput <p className='ml-2 text-black font-normal'>- September 11, 2020</p> </p>
              <p className='ml-12 '><ReactStars
                    count={5}
                    value={5}
                    size={28}
                    activeColor="#ffd700"
                /></p>
                <p className='ml-12 mb-4'>Great Organization</p>
              
          </div>
      </div>
      <p className='sm:mx-40 text-zinc-700 mt-8'> Your email address will not be published. Required fields are marked * </p>
      <p className='sm:mx-40 text-zinc-700 mt-4'> Your rating * </p>
      <p className='sm:mx-40 '><ReactStars
            count={5}
            value={0}
            size={28}
            activeColor="#ffd700"
        /></p>
        <div className='sm:mx-40 mt-4'>
            <form>
                <label className=' text-zinc-700'>Your review *</label>
                <br></br>
                <textarea rows="3" value={review}
                onChange={(e) => setReview(e.target.value)} className="p-4  w-full  mt-2 rounded-xl border-2 hover:border-black focus:border-blue-400 focus:outline-none"></textarea>
                <label className='text-zinc-700 mt-4'> Name *</label>
                <br></br>
                <input type='text' className='w-full mt-2 rounded-xl border-2 hover:border-black p-2 focus:border-blue-400 focus:outline-none'></input>
                <label className='text-zinc-700 mt-4'> Email *</label>
                <br></br>
                <input type='text' className='w-full mt-2 rounded-xl border-2 mb-4 hover:border-black p-2 focus:border-blue-400 focus:outline-none'></input>
                <div className='flex mb-4'><input type='checkbox' className='p-2 mt-2 mr-2'></input> <p>Save my name, email, and website in this browser for the next time I comment.</p></div>
                <div className='bg-amber-400 text-white text-center mb-12'>
                    <button className='py-2 text-xl'>Submit</button>
                </div>
            </form>
        </div>
        <Footer/>
  </div>
  );
};

export default Donate;
