import React, {useEffect} from "react";
import Navbar from "../Components/Navbar";
import DogVid from "../images/dogvid.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from 'react-router-dom'
import Slider from "../Components/Slider";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import CountUp from "react-countup";
import help from "../images/help.png";
import { FaHandshake, FaDonate } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiSlideshare } from "react-icons/si";
import { Footer } from "../Components/Footer";
const Home = () => {
  AOS.init({
    duration: 3000,
  });

  useEffect(() =>{
    document.title = 'Home - PerroAyuda'
    window.scrollTo(0,0);
  },[])
  
  return (
    <div>
      <Navbar />
      <div className="bg-orange-300 py-2 ">
        <Slider />
      </div>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={DogVid} type="video/mp4" />
        </video>
        <div className="bg-zinc-800 bg-opacity-60 ">
          <h1 className="text-white  text-9xl pt-16 ml-8"> Dogs </h1>
          <p className="italic text-white text-5xl mt-16 ml-8">
            HUMAN'S BEST FRIEND. THE PAL.
          </p>
          <p className="italic text-white text-3xl mt-16 ml-8 pb-28 ">
            The dog or domestic dog is a domesticated descendant of the wolf
            which is characterized by an upturning tail.{" "}
          </p>
        </div>
      </div>
      <div div className="bg-red-300  py-4">
        <div style={{ textAlign: "center" }}>
          <Link to="/donate"><button
            data-aos="fade-up"
            className="mt-8 bg-emerald-500 py-4 sm:px-40 border px-16  hover:bg-emerald-400 border-transparent rounded-xl text-white text-2xl font-bold"
          >
            DONATE NOW
          </button>
          </Link>
        </div>
        <div
          data-aos="fade-right"
          className="bg-blue-800 sm:ml-44 border border-transparent sm:flex  rounded-2xl sm:mr-44 text-white mt-8"
        >
          <h1 className="font-bold m-4 ml-8 pt-4 text-3xl ">
            Monthly Emergency Funds
            <p className="text-xl mt-4 pb-4">
              Become a helping hand to our organisation.
            </p>
          </h1>

          <div className="sm:ml-12" style={{ textAlign: "center" }}>
            <Link to="/donate"><button className="bg-amber-400  border rounded-xl border-transparent sm:ml-96 sm:mt-12 mb-4 shadow-xl py-2 px-4 text-xl">
              Donate Now
            </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="bg-orange-600 sm:ml-44 border border-transparent sm:flex  rounded-2xl sm:mr-44 text-white mt-8"
        >
          <h1 className="font-bold m-4 ml-8 pt-4 text-3xl ">
            Join Us Today!
            <p className="text-xl mt-4 pb-4">
              Be a part of our organisationand help the strays!
            </p>
          </h1>

          <div style={{ textAlign: "center" }}>
            <Link to='/registration'>
            <button className="bg-stone-800  border rounded-xl border-transparent sm:ml-96 sm:mt-12 mb-4 shadow-xl py-2 px-4 text-xl">
              Join Us Now
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-amber-200 shadow-2xl py-4">
        <div className="sm:grid sm:grid-cols-4 sm:mx-48 sm:gap-8 my-8">
          <div
            data-aos="flip-left"
            className="bg-green-700 text-center border border-transparent rounded-xl text-white"
          >
            <img
              className="border border-transparent rounded-xl object-fill w-96"
              src={card1}
              alt=""
            ></img>
            <h1 className="text-2xl font-bold my-4">Fun Feeding Drive</h1>
            <p className="text-lg m-4 ">
              We frequently organize fun feeding drives in different areas to
              raise awareness for the welfare of stray animals.
            </p>
            <Link to="/"><button className="bg-green-500 py-2 px-4 my-4">Know More</button></Link>
          </div>
          <div
            data-aos="flip-left"
            className="bg-purple-800 text-center border border-transparent rounded-xl text-white"
          >
            <img
              className="border border-transparent rounded-xl object-fill w-96"
              src={card2}
              alt=""
            ></img>
            <h1 className="text-2xl font-bold my-4">Rescue</h1>
            <p className="text-lg m-4 ">
              We are currently recusing stray animals on a daily basis and we
              provide them with the best treatment.
            </p>
            <Link to='/'><button className="bg-purple-500 py-2 px-4 my-4">Know More</button></Link>
          </div>
          <div
            data-aos="flip-right"
            className="bg-red-700 text-center border border-transparent rounded-xl text-white"
          >
            <img
              className="border border-transparent rounded-xl object-fill w-96"
              src={card3}
              alt=""
            ></img>
            <h1 className="text-2xl font-bold my-4">Adoption</h1>
            <p className="text-lg m-4 ">
              We help stray animals to get their permanent home and to help them
              find a forever loving family.
            </p>
            <Link to='/adoption'><button className="bg-red-500 py-2 px-4 my-4">Know More</button></Link>
          </div>
          <div
            data-aos="flip-right"
            className="bg-cyan-700 text-center border border-transparent rounded-xl text-white"
          >
            <img
              className="border border-transparent rounded-xl object-fill w-96"
              src={card4}
              alt=""
            ></img>
            <h1 className="text-2xl font-bold my-4">Recruitment</h1>
            <p className="text-lg m-4 ">
              We have recently launched our internship program to help college
              students with certificates and LOR.
            </p>
            <Link to='internship-program'><button className="bg-cyan-500 py-2 px-4 my-4">Know More</button></Link>
          </div>
        </div>
      </div>
      <div className="bg-emerald-300  py-4">
        <div className="sm:mx-40 mt-8">
          <h1 className="text-3xl flex text-slate-700">
            Our volunteers are
            <p className="font-bold ml-2 text-black">Feeding</p>
          </h1>
          <p className="text-xl font-bold text-slate-700 mt-2">
            1000+ stray animals everyday
          </p>
          <p className="text-lg mt-2 text-slate-700">
            Join us in this wonderful initiative of feeding your own locality
            strays.
          </p>
          <div className="text-center">
            <p className="text-8xl font-bold mt-8 text-red-500">
              <CountUp delay={3} end={500} />+
            </p>
            <p className="text-2xl text-slate-700">Members</p>
            <p className="text-8xl font-bold mt-8 text-red-500">
              <CountUp delay={3} end={60} />
              k₹
            </p>
            <p className="text-2xl text-slate-700">Donation</p>
          </div>
        </div>
      </div>
      <div className="pt-2 mb-8 bg-emerald-300">
        <img src={help} alt="" className=""></img>
      </div>
      <div className="sm:grid sm:grid-cols-4 sm:gap-8 text-center sm:mx-48 my-24">
        <div className="border rounded-md border-amber-400 ">
          <p className="text-amber-400 mt-4 sm:ml-24 ml-36 text-7xl">
            <FaHandshake />
          </p>
          <p className="text-3xl m-4 font-bold ">Become a Volunteer</p>
          <p className="m-8">
            Join us as a volunteer of Perroayuda Welfare Foundation for the
            welfare of animals.
          </p>
        </div>
        <div className="border rounded-md border-amber-400 ">
          <p className="text-amber-400 mt-4 sm:ml-24 ml-36 text-7xl">
            <FaDonate />
          </p>
          <p className="text-3xl m-4 font-bold">Donate</p>
          <p className="m-8">
            Become a helping hand and donate us for the treatment of strays.
          </p>
        </div>
        <div className="border rounded-md border-amber-400 ">
          <p className="text-amber-400 mt-4 sm:ml-24 ml-36 text-7xl">
            <MdOutlineWorkOutline />
          </p>
          <p className="text-3xl m-4 font-bold">Work with PWF</p>
          <p className="m-8">
            Join PWF's Recruitment program and work with us, Certificate and LOR
            will be provided.
          </p>
        </div>
        <div className="border rounded-md border-amber-400 ">
          <p className="text-amber-400 mt-4 sm:ml-24 ml-36 text-7xl">
            <SiSlideshare />
          </p>
          <p className="text-3xl m-4 font-bold">Share</p>
          <p className="m-8">
            Share our good work with friends and family. Follow us on social
            media for daily updates.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
