import React, {useEffect} from 'react';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import missiondog from '../images/missiondog.png';
import {CgSmileMouthOpen} from 'react-icons/cg'
import {AiFillHome} from 'react-icons/ai'
import {FaAmbulance} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import missiondog2 from '../images/missiondog2.png';
import CountUp from "react-countup";
import { Footer } from '../Components/Footer';
const Mission = () => {

    useEffect(() => {
        document.title='Our Mission - PerroAyuda';
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
          <h1 className="text-white font-bold text-4xl pt-16 ml-8 pt-40"> Our Mission </h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home/Our Mission
          </p>
        </div>
        
      </div>
      <div className="sm:mx-40 mt-12 text-white sm:grid sm:grid-cols-2 gap-10">
          <div>
          <h1 className="text-3xl ">Become A Helping Hand</h1>
          <p className="font-bold mt-2 text-xl ">Join Perroayuda Welfare Foundation</p>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 mt-8">
              <div>
                  <p className="flex text-2xl   font-semibold"><CgSmileMouthOpen className="text-amber-400 text-6xl mr-2"/> <p className="mt-4">Feed Strays</p></p>
                  <p className="ml-16 text-md">Our motive is that everyone should start feeding their own locality strays and to save them from dying.</p>
                  <p className="flex text-2xl   font-semibold"><AiFillHome className="text-amber-400 text-5xl mr-4"/> <p className="mt-4">Animal Shelter</p></p>
                  <p className="ml-16 text-md mt-2">We are looking forward to open animal shelters for the treatment of stray animals.</p>
              </div>
              <div className="ml-4">
              <p className="flex text-xl   font-semibold"><FaAmbulance className="text-amber-400 text-6xl mr-2"/> <p className="mt-4">Animal Ambulance</p></p>
              <p className="ml-16 text-md">Looking forward to have our own animal ambulance for the rescue operations.</p>
              <p className="flex text-2xl mt-6  font-semibold"><BsFillPeopleFill className="text-amber-400 text-5xl mr-4"/> <p className="mt-4">Social Welfare</p></p>
              <p className="ml-16 text-md mt-2">We are planing to expand our areas of work, Looking forward to work for social welfare.</p>
              </div>
          </div>
          </div>
          <div>
              <img className='border h-5/6 mt-4 sm:ml-8  border-transparent rounded-xl' src={missiondog} alt=''></img>
          </div>
      </div>
      <div className="bg-zinc-100">
          <div className="sm:grid sm:mx-40 mb-16 sm:grid-cols-2 gap-10">
              <div>
                  <img className="my-12 border border-transparent rounded-xl h-4/5" src={missiondog2} alt=''></img>
              </div>
              <div className="my-16">
                  <p className="text-3xl font-semibold text-slate-800">Our Volunteers are Feeding</p>
                  <p className="mt-2 text-xl font-bold text-slate-500 ">1000+ Stray Animals Everyday</p>
                  <p className="mt-4 text-xl font-semibold text-amber-600">Join us in this wonderful initiative of feeding your own locality strays.</p>
                  <div className="sm:grid sm:grid-cols-2 mt-8 gap-8">
                      <div>
                          <p className="text-7xl text-center text-red-600 font-bold"><CountUp end={500} delay={3}/>+</p>
                          <p className="text-red-500 text-center mt-2 text-xl">Volunteers</p>
                          <p className="text-7xl text-center mt-6 text-amber-500 font-bold"><CountUp end={100} delay={3}/>+</p>
                          <p className="text-amber-500 text-center mt-2 text-xl">Interns</p>
                      </div>
                      <div>
                          <p className="text-7xl text-center text-green-700 font-bold">₹<CountUp end={60} delay={3}/>k</p>
                          <p className="text-green-700 text-center mt-2 text-xl">Donation</p>
                          <p className="text-7xl text-center mt-6 text-blue-700 font-bold"><CountUp end={1000} delay={3}/>+</p>
                          <p className="text-blue-700 text-center mt-2 text-xl">Lives Saved</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
  );
};

export default Mission;
