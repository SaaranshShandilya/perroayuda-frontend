import React, {useEffect} from 'react';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import about1 from '../images/about1.png'; 
import about2 from '../images/about2.png'
import CountUp from "react-countup";
import missiondog from '../images/missiondog.png';
import {BiRegistered} from 'react-icons/bi'
import {AiFillClockCircle} from 'react-icons/ai'
import {RiTeamLine} from 'react-icons/ri'
import {GiDivergence} from 'react-icons/gi'
import {FaGlobeAmericas} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {FaRegHandScissors} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import { Footer } from '../Components/Footer';
import Arpit from '../images/Arpit.jpg';
import Manav from '../images/Manav.jpeg';
import Prabhjeet from '../images/Prabhjeet.png';
import Sakshi from '../images/Sakshi.jpeg';
import ambica from '../images/ambica.png';
import InderPal from '../images/InderPal.png';
import naman from '../images/naman.png';
import praneet from '../images/Praneet.png';
import urvi from '../images/Urvi.png';
import ishaan from '../images/ishaan.png';
import shruti from '../images/shuti.png';
import yash from '../images/yash.png';
import narendranath from '../images/narendranath.png';
import sumit from '../images/sumit.png';
import sheryl from '../images/sheryl.png';
import mabel from '../images/mabel.png';
import Siddharth from '../images/Siddharth.png';
import muskan from '../images/muskan.png';
import kamal from '../images/kamal.png';
import niyati from '../images/niyati.png';
import navya from '../images/nayva.png';
import vanshika from '../images/vanshika.png';
const About = () => {
    
    useEffect(() => {
        document.title='About Us - PerroAyuda'
        window.scrollTo(0, 0)
      }, [])
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
            
          }} src={dog2} alt='banner'></img>
          <div className="bg-zinc-800 text-center bg-opacity-60 ">
          <h1 className="text-white font-bold text-4xl  ml-8 pt-40">About Us</h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home/About Us
          </p>
        </div>
      </div>
      <div className="mt-16 sm:grid text-white sm:grid-cols-2 sm:mx-44">
          <div>
              <p className="mt-2 text-3xl font-semibold ">Rescue Operations</p>
              <p className="mt-3 text-lg ">We are currently recusing stray animals on a daily basis and we provide them with the best treatment.</p>
              <p className="text-3xl font-semibold mt-6 ">Internships for College Students</p>
              <p className="mt-3 text-lg ">We have recently launched our internship program to help college students with certificates and LOR.</p>
              <p className="text-3xl font-semibold mt-6 ">Adoption of Stray Animals</p>
              <p className="mt-3 text-lg ">We help stray animals to get their permanent home and to help them find a forever loving family.</p>
              <p className="text-3xl font-semibold mt-6 ">Fun Feeding Drives for Awareness</p>
              <p className="mt-3 text-lg ">“Feeding should not be confined to just visiting and serving food and coming back it should please the soul and turn our faces into smileys - Swarn”.</p>
          </div>
          <div>
              <img className='sm:ml-16 rounded-xl' src={about1} alt=''></img>
          </div>
      </div>
      <div>
          <div className="sm:grid sm:grid-cols-2 sm:mx-44 my-12  gap-8">
              <div>
                  <img className="rounded-xl" src={about2} alt=''></img>
              </div>
              <div className="sm:grid sm:grid-cols-2 text-white mt-32 ">
                  <div>
                      <p className="flex font-bold text-2xl ml-4"><BiRegistered className=" text-6xl font-bold mr-2 text-amber-400"/><p className="mt-4">Registered NGO</p></p>
                      <p className="flex font-bold mt-8 text-2xl ml-6"><AiFillClockCircle className=" text-6xl font-bold mr-4 text-amber-400"/><p className="mt-4">Immediate Response Team</p></p>
                  </div>
                  <div>
                  <p className="flex font-bold text-2xl ml-4"><RiTeamLine className=" text-6xl font-bold mr-2 text-amber-400"/><p className="mt-4">Youth Organization</p></p>
                      <p className="flex font-bold mt-8 text-2xl ml-6"><GiDivergence className=" text-6xl font-bold mr-4 text-amber-400"/><p className="mt-4">Diverse Approach</p></p>
                  </div>
              </div>
          </div>
      </div>
      <div className="bg-slate-100 py-8">
          <div className="sm:grid sm:mx-44  text-center sm:grid-cols-4 sm:gap-8">
              <div>
              <p className="text-7xl text-center mt-6 text-red-600 font-bold"><CountUp end={500} delay={3}/>+</p>
              <p className="text-red-500 text-center mt-2 text-xl">Volunteers</p>
              </div>
              <div>
              <p className="text-7xl text-center mt-6 text-green-700 font-bold">₹<CountUp end={60} delay={3}/>k</p>
                <p className="text-green-700 text-center mt-2 text-xl">Donation</p>
              </div>
              <div>
              <p className="text-7xl text-center mt-6 text-amber-500 font-bold"><CountUp end={100} delay={3}/>+</p>
                <p className="text-amber-500 text-center mt-2 text-xl">Interns</p>
              </div>
              <div>
              <p className="text-7xl text-center mt-6 text-blue-700 font-bold"><CountUp end={1000} delay={3}/>+</p>
                <p className="text-blue-700 text-center mt-2 text-xl">Lives Saved</p>
              </div>
          </div>
      </div>
      <div className="sm:mx-40 mt-12 text-white sm:grid sm:grid-cols-2 gap-10">
          <div>
          <h1 className="text-3xl ">You Can Join Us</h1>
          <p className="font-bold mt-2 text-xl ">What are we doing</p>
          <div className="sm:grid sm:grid-cols-2 gap-4 mt-8">
              <div>
                  <p className="flex text-2xl   font-semibold"><FaGlobeAmericas className="text-amber-400 text-6xl mr-2"/> <p className="mt-4">Expansion</p></p>
                  <p className="ml-16 text-md">We are looking forward to expand our operations throughout the country.</p>
                  <p className="flex text-2xl mt-12  font-semibold"><AiFillHome className="text-amber-400 text-5xl mr-4"/> <p className="mt-4">Animal Shelter</p></p>
                  <p className="ml-16 text-md mt-2">We are looking forward to open animal shelters for the treatment of stray animals.</p>
              </div>
              <div className="ml-4">
              <p className="flex text-xl   font-semibold"><FaRegHandScissors className="text-amber-400 text-6xl mr-2"/> <p className="mt-4">Internship</p></p>
              <p className="ml-16 text-md">We have recently launched our internship program to help college students with certificates and LOR.</p>
              <p className="flex text-2xl mt-6  font-semibold"><RiTeamFill className="text-amber-400 text-5xl mr-4"/> <p className="mt-4">Team Building</p></p>
              <p className="ml-16 text-md mt-2">Looking for more and more like minded volunteer to expand our operations.</p>
              </div>
          </div>
          </div>
          <div>
                <img className='border h-5/6 mt-4 sm:ml-8  border-transparent rounded-xl' src={missiondog} alt=''></img>
          </div>
      </div>

          <p className='text-center font-bold mt-8 text-white text-3xl'>Board of Directors</p>
      <div className='sm:grid sm:grid-cols-3 space-y-8 gap-9 my-12 sm:mx-40'>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 rounded-full mx-auto ' src={Arpit} alt=''></img>
              <p className='my-2 text-xl text-zinc-800 font-semibold '>Arpit Mathur</p>
              <p>Director</p>
              <p className='mx-12 my-4 text-zinc-600'>I was working with RHA before and got inspired and ended up starting PWF and it feels like the right choice as it is fun, legal and the most important thing is myself feeling great about it.</p>
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/4 rounded-full mx-auto ' src={Manav} alt=''></img>
              <p className='my-2 text-xl text-zinc-800 font-semibold '>Manav Yadav</p>
              <p>Director</p>
              <p className='mx-12 my-4 text-zinc-600'>I have always loved the voiceless creatures, I am here becuase I am against the animal cruelty done by some insane people who lack humanity.</p>
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/4 rounded-full mx-auto ' src={Prabhjeet} alt=''></img>
              <p className='my-2 text-xl text-zinc-800 font-semibold '>Prabhjeet</p>
              <p>Director</p>
              <p className='mx-12 my-4 text-zinc-600'>For me, dogs are life, I can do anything for them at any single point of time, so we decided to do it in a legal way, here we are with this NGO, leading onto great things.</p>
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Advisors</p>
      <div className='sm:grid sm:grid-cols-3 sm:gap-9 my-12 sm:mx-40 space-y-8'>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/2 rounded-full mx-auto ' src={Sakshi} alt=''></img>
              <p className='my-2 text-xl text-zinc-800 font-semibold '>Sakshi Garg</p>
              <p>Advisor</p>
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={ambica} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Ambica Sharma</p>
              <p>Advisor</p>
             
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={InderPal} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Inder Pal Singh</p>
              <p>Advisor</p>
             
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Human Resources</p>
      <div className='sm:grid sm:grid-cols-3 sm:gap-9 my-12 sm:mx-40'>
          <div >
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={naman} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Naman Gupta</p>
              <p>HR Head</p>
             
          </div>
          <div >
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>IT Heads</p>
      <div className='sm:grid sm:grid-cols-2 sm:gap-9 my-12 sm:mx-40  space-y-8'>
          <div className='text-center sm:mx-20 my-12  bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/2 rounded-full mx-auto ' src={praneet} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Praneet Arya</p>
              <p>IT Head</p>
            
          </div>
          <div className='text-center sm:mx-20 my-10  bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/2 rounded-full mx-auto ' src={ishaan} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Ishaan Bajaj</p>
              <p>IT head</p>
            
          </div>
          
      </div>

      <p className='text-center font-bold text-white text-3xl'>Graphic Head</p>
      <div className='sm:grid sm;grid-cols-3 sm:gap-9 my-12 sm:mx-40'>
          <div >
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={urvi} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Urvi Jha</p>
              <p>Graphic Head</p>
             
          </div>
          <div >
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Content Head</p>
      <div className='sm:grid sm:grid-cols-3 sm:gap-9 my-12 sm:mx-40 '>
          <div >
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/2  rounded-full mx-auto ' src={shruti} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Shruti Mathur</p>
              <p>Content Head</p>
             
          </div>
          <div >
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Event Heads</p>
      <div className='sm:grid sm:grid-cols-2 sm:gap-52 my-12 sm:mx-60 space-y-8'>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/2 rounded-full mx-auto ' src={yash} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Yash Sharma</p>
              <p>Event Head</p>
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={narendranath} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Narendranath Dandibohtla</p>
              <p>Event Head</p>
             
          </div>
          
      </div>

      <p className='text-center font-bold text-white text-3xl'>Adoption</p>
      <div className='sm:grid sm:grid-cols-3 sm:gap-9 my-12 sm:mx-40'>
          <div >
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={sumit} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Sumit Pal Singh</p>
              <p>Adoption Head</p>
             
          </div>
          <div >
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Research And Developement </p>
      <div className='sm:grid sm:grid-cols-3 sm:gap-9 my-12 sm:mx-40'>
          <div >
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={sheryl} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Sheryl Lazer</p>
              <p>R & D Head</p>
             
          </div>
          <div >
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Administration </p>
      <div className='sm:grid sm:grid-cols-2 sm:gap-52 space-y-8 my-12 sm:mx-60'>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-1/2 rounded-full mx-auto ' src={mabel} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Mabel Louis</p>
              <p>Administration Head</p>
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={Siddharth} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Siddharth Shah</p>
              <p>Administration Head</p>
             
          </div>
          
      </div>

      <p className='text-center font-bold text-white text-3xl'>Legal </p>
      <div className='sm:grid sm:grid-cols-2 sm:gap-52 my-12 sm:mx-60 space-y-8'>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={muskan} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Muskan Sahni</p>
              <p>Legal Head</p>
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-24  rounded-full mx-auto ' src={kamal} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Kamal Nayan Tiwari</p>
              <p>Legal Head</p>
             
          </div>
          
      </div>

      <p className='text-center font-bold text-white text-3xl'>Fundraising</p>
      <div className='sm:grid sm:grid-cols-3 sm:gap-9 my-12 sm:mx-40'>
          <div >
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={niyati} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Niyati Advani</p>
              <p>Fundraising Head</p>
             
          </div>
          <div >
          </div>
      </div>

      <p className='text-center font-bold text-white text-3xl'>Public Relations </p>
      <div className='sm:grid sm:grid-cols-2 sm:gap-52 my-12 sm:mx-60 space-y-8'>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4  rounded-full mx-auto ' src={navya} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Navya Jain</p>
              <p>PR Head</p>
            
          </div>
          <div className='text-center bg-white p-4 rounded-xl'>
              <img className='w-1/4 h-24  rounded-full mx-auto ' src={vanshika} alt=''></img>
              <p className='mt-4 mb-2 text-xl text-zinc-800 font-semibold '>Vanshika Pathak</p>
              <p>PR Head</p>
             
          </div>
          
      </div>

      <Footer/>
  </div>
  );
};

export default About;
