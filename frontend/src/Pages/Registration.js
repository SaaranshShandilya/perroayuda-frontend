import React, {useEffect} from 'react';
import { Footer } from '../Components/Footer';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import registration1 from '../images/registration1.png';

const Registration = () => {

    useEffect(() => {
        document.title = 'Register - PerroAyuda';
        window.scrollTo(0,0);
    },[])
    const[name, setName] = React.useState('')
    const[email, setEmail] = React.useState('')
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
          <h1 className="text-white font-bold text-4xl  ml-8 pt-40">Registartion</h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">
           Home / Registration
          </p>
        </div>
      </div>
      <div className='sm:mx-40 my-12 bg-zinc-100 border rounded-lg'>
      
          <img className="mx-auto w-1/2" src={registration1} alt='' ></img>
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
              <br></br>
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
                // value={contact}
                // onChange={(e) => setContact(e.target.value)}
              ></input>
              <br></br>
              <label className="text-lg ml-4">Your Message:</label>
              <br></br>
              <textarea rows="3" 
            //   value={message}
            //     onChange={(e) => setMessage(e.target.value)} 
                className="p-4  w-5/6 ml-4 mt-2 rounded-xl border-2 hover:border-black focus:border-blue-400 focus:outline-none"></textarea>
              <div className="text-center">
              <button 
            //   onClick = {handleSubmit} 
              className="mt-8 py-4 rounded-xl px-8 bg-slate-800 hover:bg-blue-900 text-white">SEND</button>
              </div>
              </form>
      </div>
      <Footer/>
  </div>
  );
};

export default Registration;
