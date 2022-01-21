import React from 'react';
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
const About = () => {
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
          <h1 className="text-white font-bold text-4xl  ml-8 pt-40">About Us</h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home/About Us
          </p>
        </div>
      </div>
      <div className="mt-16 sm:grid sm:grid-cols-2 sm:mx-44">
          <div>
              <p className="mt-2 text-3xl font-semibold text-slate-700">Rescue Operations</p>
              <p className="mt-3 text-lg text-slate-500">We are currently recusing stray animals on a daily basis and we provide them with the best treatment.</p>
              <p className="text-3xl font-semibold mt-6 text-slate-700">Internships for College Students</p>
              <p className="mt-3 text-lg text-slate-500">We have recently launched our internship program to help college students with certificates and LOR.</p>
              <p className="text-3xl font-semibold mt-6 text-slate-700">Adoption of Stray Animals</p>
              <p className="mt-3 text-lg text-slate-500">We help stray animals to get their permanent home and to help them find a forever loving family.</p>
              <p className="text-3xl font-semibold mt-6 text-slate-700">Fun Feeding Drives for Awareness</p>
              <p className="mt-3 text-lg text-slate-500">“Feeding should not be confined to just visiting and serving food and coming back it should please the soul and turn our faces into smileys - Swarn”.</p>
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
              <div className="sm:grid sm:grid-cols-2 mt-32 ">
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
      <div className="sm:mx-40 mt-12 sm:grid sm:grid-cols-2 gap-10">
          <div>
          <h1 className="text-3xl text-slate-800">You Can Join Us</h1>
          <p className="font-bold mt-2 text-xl text-slate-500">What are we doing</p>
          <div className="sm:grid sm:grid-cols-2 gap-4 mt-8">
              <div>
                  <p className="flex text-2xl  text-slate-800 font-semibold"><FaGlobeAmericas className="text-amber-400 text-6xl mr-2"/> <p className="mt-4">Expansion</p></p>
                  <p className="ml-16 text-md">We are looking forward to expand our operations throughout the country.</p>
                  <p className="flex text-2xl mt-12 text-slate-800 font-semibold"><AiFillHome className="text-amber-400 text-5xl mr-4"/> <p className="mt-4">Animal Shelter</p></p>
                  <p className="ml-16 text-md mt-2">We are looking forward to open animal shelters for the treatment of stray animals.</p>
              </div>
              <div className="ml-4">
              <p className="flex text-xl  text-slate-800 font-semibold"><FaRegHandScissors className="text-amber-400 text-6xl mr-2"/> <p className="mt-4">Internship</p></p>
              <p className="ml-16 text-md">We have recently launched our internship program to help college students with certificates and LOR.</p>
              <p className="flex text-2xl mt-6 text-slate-800 font-semibold"><RiTeamFill className="text-amber-400 text-5xl mr-4"/> <p className="mt-4">Team Building</p></p>
              <p className="ml-16 text-md mt-2">Looking for more and more like minded volunteer to expand our operations.</p>
              </div>
          </div>
          </div>
          <div>
                <img className='border h-5/6 mt-4 sm:ml-8  border-transparent rounded-xl' src={missiondog} alt=''></img>
          </div>
      </div>
      <Footer/>
  </div>
  );
};

export default About;
