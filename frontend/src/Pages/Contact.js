import React, {useState, useEffect} from 'react';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import {FiNavigation} from 'react-icons/fi'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {BsGlobe} from 'react-icons/bs'
import contact1 from '../images/contact1.png';
import map from '../images/map.png';
import { Footer } from '../Components/Footer';

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact Us - PerroAyuda';
    window.scrollTo(0,0);
  },[])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setContact('');
    setMessage('');
  }


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
          <h1 className="text-white font-bold text-4xl  ml-8 pt-40">Conatct Us</h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home/Contact Us
          </p>
        </div>
      </div>
      <div className="sm:grid sm:mx-44 my-20 sm:grid-cols-3 gap-8">
          <div className="col-span-2">
              <div className="bg-zinc-100 rounded-xl p-8">
                  <p className="text-4xl flex font-semibold text-slate-500 ">Contact <p className="text-black ml-2">Us</p></p>
                  <p className="mt-4 text-slate-500 text-xl font-bold">Join Perroayuda Welfare Foundation</p>
                  <p className="flex text-2xl mt-8 text-slate-700 font-semibold"><FiNavigation className="text-black text-3xl mr-4"/> H.NO. 31, E-21, Sector-3, Rohini, Delhi-110085 </p>
                  <p className="flex text-2xl mt-8 text-slate-700 font-semibold"><BsTelephone className="text-black text-3xl mr-4"/> +(91)-8826563059 / +(91)-8802286161 </p>
                  <p className="flex text-2xl mt-8 text-slate-700 font-semibold"><HiOutlineMail className="text-black text-3xl mr-4"/> info@perroayuda.org </p>
                  <p className="flex text-2xl mt-8 text-slate-700 font-semibold"><BsGlobe className="text-black text-3xl mr-4"/> www.perroayuda.org </p>
                  <img src={contact1} className="mt-4" alt=''></img>
              </div>
          </div>
          <div className="bg-zinc-100 rounded-xl">
              <form className="my-8 py-8">
              <label className="text-lg ml-4">Your Name (required)</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="p-4 w-5/6 ml-4 mt-2 rounded-xl border-2 hover:border-black focus:border-blue-400 focus:outline-none"
              ></input>
              <br></br>
              <label className="text-lg ml-4">Your Email (required)</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="p-4  w-5/6 ml-4 mt-2 rounded-xl border-2 hover:border-black focus:border-blue-400 focus:outline-none"
              ></input>
              <br></br>
              <label className="text-lg ml-4">Your Contact Number</label>
              <input
                type="integer"
                className="p-4  mt-2 ml-4 w-5/6 rounded-xl w-30 border-2 hover:border-black focus:border-blue-400 focus:outline-none"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              ></input>
              <br></br>
              <label className="text-lg ml-4">Your Message:</label>
              <br></br>
              <textarea rows="3" value={message}
                onChange={(e) => setMessage(e.target.value)} className="p-4  w-5/6 ml-4 mt-2 rounded-xl border-2 hover:border-black focus:border-blue-400 focus:outline-none"></textarea>
              <div className="text-center">
              <button onClick = {handleSubmit} className="mt-8 py-4 rounded-xl px-8 bg-slate-800 hover:bg-blue-900 text-white">SEND</button>
              </div>
              </form>
          </div>
      </div>
      <div className="sm:mx-40 my-20">
        <img src={map} className="border-8 rounded-xl border-zinc-100" alt=''></img>
      </div>
      <Footer/>
  </div>
  );
};

export default Contact;
