import React from 'react';
import { GrNotes } from "react-icons/gr";
import logo from "../images/logo.png";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'
import {BsGlobe} from 'react-icons/bs'
import razorpay from '../images/razorpay.png';
import {Link } from 'react-router-dom';

export const Footer = () => {
    
    const [email, setEmail] = React.useState("");

  const handleEmail = () => {
    console.log(email);
    setEmail("");
  };
  return (
  <div>
      <footer>
        <div className="sm:grid  sm:mx-44 sm:grid-cols-4 sm:gap-12">
          <div>
            <img className="w-40 " src={logo}></img>
            <p className="mt-4">
              Perroayuda Welfare Foundation is registered as an NGO under the
              section 8 companies act 2013.
            </p>
            <p className="flex mt-4">
              <GrNotes className="mr-2" /> CIN-U85300DL2020NPL366845
            </p>
            <p className="flex mt-4">
              <GrLocation className="mr-2 text-3xl" /> H.NO. 31, E-21, Sector-3,
              Rohini, Delhi-110085
            </p>
            <p className="flex mt-4">
              <BsTelephone className="mr-2 text-2xl" />
              +(91)-8826563059 / +(91)-8802286161
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-amber-500">NEWSLETTER</h1>
            <form className="mt-4">
              <label className="text-lg">Your Email (required)</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="p-4  mt-2 rounded-xl border-2 hover:border-black focus:border-blue-400 focus:outline-none"
              ></input>
              <button
                type="button"
                onClick={handleEmail}
                className="bg-zinc-700 text-white py-2 px-4 mt-4 border border-transparent rounded-xl hover:bg-teal-700"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-amber-500">
              IMPORTANT LINKS
            </h1>
            <ul className="list-disc ml-8 mt-4">
              <Link to = '/'><li className="hover:text-amber-500">Home</li></Link>
              <Link to='/faq-page'><li className="hover:text-amber-500">Our Mission</li></Link>
              <Link to='/blogs'><li className="hover:text-amber-500">Blogs</li></Link>
              <Link to='/about-us'><li className="hover:text-amber-500">About Us</li></Link>
              <Link to='/contact'><li className="hover:text-amber-500">Contact Us</li></Link>
              <li className="hover:text-amber-500">Shop</li>
              <li className="hover:text-amber-500">Pincode Search</li>
              <li className="hover:text-amber-500">District Search</li>
            </ul>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-amber-500">
              CONNECT WITH US
            </h1>
            <p className="flex space-x-8 mt-4 text-xl">
              <a href='https://www.facebook.com/perroayudawelfarefoundation'><GrFacebookOption className="border border-transparent rounded-xl text-2xl hover:bg-blue-300" /></a>
              <a href='https://twitter.com/perroayuda'><FaTwitter className="border border-transparent rounded-xl  hover:bg-blue-300"></FaTwitter></a>
              <a href='https://www.linkedin.com/company/perroayuda-welfare-foundation/'><GrLinkedinOption className="border border-transparent rounded-md  hover:bg-blue-300"></GrLinkedinOption></a>
              <a href='https://www.instagram.com/perroayuda/'><BsInstagram className="border border-transparent rounded-md  hover:bg-red-300"></BsInstagram></a>
              <a href='https://www.youtube.com/channel/UCyQ68xX92ND8aR0IY85MJ8A'><BsYoutube className="border border-transparent rounded-md  hover:bg-red-300"></BsYoutube></a>
            </p>
            <a href='mailto:info@perroayuda.org'><p className="flex mt-8 hover:text-amber-500"><HiOutlineMail className="text-xl mr-2"></HiOutlineMail>info@perroayuda.org</p></a>
            <Link to='/contact'><p className="flex mt-2 hover:text-amber-500"><BsGlobe className="text-xl mr-2"></BsGlobe>www.perroayuda.org</p></Link>
            <img src={razorpay} className="w-40" alt=""></img>
          </div>
          
        </div>
        <p className="text-white text-center mt-4 bg-neutral-800 py-4">Copyright 2021© PWF-Perroayuda Welfare Foundation – All rights reserved.</p>
      </footer>
  </div>
  );
};
