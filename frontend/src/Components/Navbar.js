import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import logo from '../images/logo1.png'; 

import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='mb-12'>
    <nav className="md:flex justify-between items-center bg-white shadow-xl   top-0 z-20">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="ml-32 p-2 w-28" src={logo} alt="logo" />
        </Link>


        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static mr-4 fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-gray-500  md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem  content="Home" href="/" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Our Mission" href="/faq-page/" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Blogs" href="/blogs/" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="About Us" href="/about-us" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Events" href="/events" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Rescue" href="/" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Adoption" href="/" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Contact Us" href="/contact" /></div>
      </ul>
    </nav>
    <div className='transition-right items-center float-right sm:mr-0 mr-16 mt-3 sm:mt-1'>
    <div className='text-right -mt-6 bg-red-500 px-4 py-4 mr-4 rounded-lg text-white'>
    <p className="flex space-x-8  text-xl  ">
              <a href="https://www.facebook.com/perroayudawelfarefoundation">
                <GrFacebookOption className="border border-transparent rounded-xl   text-2xl hover:bg-blue-300" />
              </a>
              <a href="https://twitter.com/perroayuda">
                <FaTwitter className="border border-transparent rounded-xl hover:bg-blue-300"></FaTwitter>
              </a>
              <a href="https://www.linkedin.com/company/perroayuda-welfare-foundation/">
                <GrLinkedinOption className="border border-transparent rounded-md  hover:bg-blue-300"></GrLinkedinOption>
              </a>
              <a href="https://www.instagram.com/perroayuda/">
                <BsInstagram className="border border-transparent rounded-md  hover:bg-red-300"></BsInstagram>
              </a>
              <a href="https://www.youtube.com/channel/UCyQ68xX92ND8aR0IY85MJ8A">
                <BsYoutube className="border border-transparent rounded-md  hover:bg-red-300"></BsYoutube>
              </a>
            </p>
    </div>
    </div>
    </div>
  );
}