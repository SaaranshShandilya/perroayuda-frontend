import React, {useEffect} from 'react';
import { Footer } from '../Components/Footer';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import registration1 from '../images/registration1.png';
import DatePicker from 'react-date-picker';

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
          <form className="p-8  mt-12 sm:ml-12 ">
            <div>
            <label className='text-xl'>Name (Required) : </label><br></br>
            <input placeholder='Enter your name'  className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 '></input>
            </div>
            <div className='mt-4'>
              <label className='text-xl'>Email (Required) :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='email' placeholder='Email address' ></input>            
            </div>
            <div className='my-4'>
              <label className='text-xl'>Date of Birth:</label> <br></br>
              <DatePicker className='mt-4'/>
            </div>
            <div>
              <label className='text-xl mr-8'>Gender:</label> 
              <select className='mt-2 py-2 px-4 w-1/2 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 '>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div className='my-4'>
              <label className='text-xl'>Contact Number :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='text' placeholder='Enter your phone number' ></input>
            </div>
            <div className='my-4'>
              <label className='text-xl'>Instagram Username :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='text' placeholder='Enter your instagram username' ></input>
            </div>
            <div className='my-4'>
              <label className='text-xl'>Permanent Address :</label> <br></br>
              <textarea className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' rows='3' type='text' placeholder='Enter your permanent address' ></textarea>
            </div>
            <div className='my-4'>
              <label className='text-xl'>City and State :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='text' placeholder='Enter your city and state' ></input>
            </div>
            <div className='my-4'>
              <label className='text-xl'>Pincode :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='text' placeholder='Enter your area pincode' ></input>
            </div>
            <div className='my-4'>
              <label className='text-xl'>Profession :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='text' placeholder='What do you do?' ></input>
            </div>
            <div className='my-4'>
              <label className='text-xl'>School / College / Company :</label> <br></br>
              <input className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' type='text' placeholder='Enter the name of your institution' ></input>
            </div>
            <div className='mt-4'>
              <p className='text-xl'>Do you have prior working experience of working with any Social Service Organization or NGO?</p>
              <input className='mt-4  ' id='yes' value='yes' name='yes' type='radio'></input>
              <label htmlFor='yes' className='ml-2 text-lg'>Yes</label>
              <input id='no' name='yes' className='mt-4 ml-40  ' value='no' type='radio'></input>
              <label htmlFor='no' className='ml-2 text-lg'>No</label>
            </div>
            <div className='my-4'>
              <p className='text-xl'>How will you contribute to our organization and our family of strays?</p>
              <input className='mt-4  ' id='yes' value='yes' name='yes' type='radio'></input>
              <label htmlFor='yes' className='ml-2 text-lg'>Feeding Drives / Events</label><br></br>
              <input id='no' name='yes' className='mt-4   ' value='no' type='radio'></input>
              <label htmlFor='no' className='ml-2 text-lg'>Rescues</label><br></br>
              <input className='mt-4  ' id='yes' value='yes' name='yes' type='radio'></input>
              <label htmlFor='yes' className='ml-2 text-lg'>Sponsoring Treatments / Medicines</label><br></br>
              <input className='mt-4  ' id='yes' value='yes' name='yes' type='radio'></input>
              <label htmlFor='yes' className='ml-2 text-lg'>Sharing for help  / Awarness on Social Media</label><br></br>
              <input className='mt-4  ' id='yes' value='yes' name='yes' type='radio'></input>
              <label htmlFor='yes' className='ml-2 text-lg'>All of the above</label>
            </div>
            <div className='my-4'>
              <label className='text-xl'>What does 'Animal Welfare' mean to you? :</label> <br></br>
              <textarea className='mt-2 py-2 px-4 sm:w-1/2 w-5/6 rounded border-2 outline-none focus:border-cyan-500 hover:border-cyan-500 ' rows='4' type='text' placeholder='Enter your permanent address' ></textarea>
            </div>
            <div>
              <p className='text-xl'>Please upload your Identification Proof (College / School ID, Aadhar Card, License)</p>
              <input type='file' id='file-upload' ></input>
            </div>
            <div className='text-center text-white'>
            <button type='button' className='bg-zinc-900 px-8 py-2 rounded text-xl font-bold mt-8 hover:bg-green-600' >Submit</button>
            </div>
          </form>
      </div>
      <Footer/>
  </div>
  );
};

export default Registration;
