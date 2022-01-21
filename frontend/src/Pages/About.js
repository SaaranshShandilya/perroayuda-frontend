import React from 'react';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import about1 from '../images/about1.png'; 
import about2 from '../images/about2.png'
import {BiRegistered} from 'react-icons/bi'
import {AiFillClockCircle} from 'react-icons/ai'
import {RiTeamLine} from 'react-icons/ri'
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
          <h1 className="text-white font-bold text-4xl pt-16 ml-8 pt-40">About Us</h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home/About Us
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 mx-44">
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
              <img className='ml-16 rounded-xl' src={about1} alt=''></img>
          </div>
      </div>
      <div>
          <div className="grid grid-cols-2 mx-44 my-12  gap-8">
              <div>
                  <img className="rounded-xl" src={about2} alt=''></img>
              </div>
              <div className="grid grid-cols-2 mt-32 ">
                  <div>
                      <p className="flex font-bold text-2xl ml-4"><BiRegistered className=" text-6xl font-bold mr-2 text-amber-400"/><p className="mt-4">Registered NGO</p></p>
                      <p className="flex font-bold mt-8 text-2xl ml-6"><AiFillClockCircle className=" text-6xl font-bold mr-4 text-amber-400"/><p className="mt-4">Immediate Response Team</p></p>
                  </div>
                  <div>
                  <p className="flex font-bold text-2xl ml-4"><RiTeamLine className=" text-6xl font-bold mr-2 text-amber-400"/><p className="mt-4">Youth Organization</p></p>
                      <p className="flex font-bold mt-8 text-2xl ml-6"><AiFillClockCircle className=" text-6xl font-bold mr-4 text-amber-400"/><p className="mt-4">Immediate Response Team</p></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default About;
