import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="md:flex justify-between items-center bg-white shadow-xl  bg-transparent  top-0 z-20">
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
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Contact Us" href="/contact" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Rescue" href="/about" /></div>
        <div className="bg-amber-400 px-4 py-2 border border-xl rounded-xl hover:bg-sky-500 border-transparent"><NavItem content="Adoption" href="/about" /></div>
      </ul>
    </nav>
  );
}