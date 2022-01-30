import React from 'react';
import NavBar from '../Components/Navbar';
import dog2 from '../images/dog2.png';
import AOS from "aos";
import "aos/dist/aos.css";
import media2 from '../images/media2.png';
import media3 from '../images/media3.png';
import media4 from '../images/media4.png';
import media5 from '../images/media5.png';
import media6 from '../images/media6.png';
import media7 from '../images/media7.png';
import { Footer } from '../Components/Footer';
import { Parallax } from 'react-scroll-parallax';
const Media = () => {

  
  const[size,setSize] = React.useState(window.innerWidth)
  const[speed, setSpeed] = React.useState(-18)

  const checkSize = () => {
    setSize(window.innerWidth);
    
  }

    React.useEffect(() => {
        AOS.init({
            duration: 3000,
          });
        document.title='Media - PerroAyuda'
        window.scrollTo(0, 0);
        window.addEventListener('resize',checkSize)
        if(size>500){
          setSpeed(-18)
        }
        else{
          setSpeed(-5)
        }
      return () =>{
        window.removeEventListener('resize', checkSize)
      }

    },[])

    console.log(speed, size)




  return (
  <div>
      <NavBar/>
      <div className="relative">
        <img
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
          src={dog2}
        ></img>
        <div className="bg-zinc-800 text-center bg-opacity-60 ">
          <h1 className="text-white font-bold text-4xl  ml-8 pt-40">
            Media Coverage
          </h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">Home / Media Coverage</p>
        </div>
      </div>
      <div className='bg-orange-400 py-4 mb-12'>
      <div className='my-24 sm:mx-40  sm:grid sm:gap-8 sm:grid-cols-2'>
          <div>
              <div>
                <Parallax speed={speed} >
                  <a href='https://yourstory.com/socialstory/2021/06/perroayuda-welfare-foundation-ngo-animal-rescue-feeding-lockdown/amp'><h1 className='font-bold sm:text-6xl text-4xl sm:my-40 text-center hover:text-white'>PerroAyuda Welfare Foundation was featured on "yourstory.com" </h1></a>
                  </Parallax>
                  <img src={media3} alt=''  className='sm:mt-96 mx-auto my-12 w-5/6'></img>
                  <Parallax speed={speed}>
                  <a href='https://www.newindianexpress.com/cities/delhi/2021/nov/03/driving-a-pawsitive-change-for-stray-dogs-in-delhi-2379116.html'><h1  className='sm:mt-96 font-bold sm:text-6xl text-center text-4xl sm:my-40 hover:text-white'>'News India Express' also recognized our efforts in covid times.</h1></a>
                  </Parallax>
                  <img src={media5} alt=''  className='sm:mt-96 my-12 mx-auto w-5/6 pt-4' ></img>
                  <Parallax speed={speed}>
                  <a href='https://www.apnnews.com/find-fondle-feed-an-initiative-to-help-strays-this-winter/'><h1 className='sm:mt-96 text-4xl font-bold sm:text-6xl text-center hover:text-white' >APN news found our initiative to be quite exhuberant.</h1></a>
                  </Parallax>
                  <img src={media7} alt=''  className='sm:my-80 my-12 w-5/6 mx-auto'></img>
              </div>
          </div>
          <div>
              <img  className='sm:my-20 mx-auto w-5/6' src={media2} alt=''></img>
              <Parallax speed={speed}>
              <a href='https://timesofindia.indiatimes.com/city/delhi/citizens-come-forward-to-feed/rescue-strays-in-their-localities-during-coronacrisis/articleshow/82944475.cms'><h1  className='font-bold sm:text-6xl text-4xl sm:pt-24 pt-12  sm:my-40 text-center hover:text-white'>Our NGO has also recieved accolades and recognition from Times of India.</h1></a>
              </Parallax>
              <img  className='sm:mt-60 my-12 w-5/6 mx-auto' src={media4} alt=''></img>
              <Parallax speed={speed}>
              <a href='https://thelogicalindian.com/humaninterest/perroayuda-animal-rights-32154'><h1  className='font-bold sm:text-6xl text-4xl sm:pt-24 ml-4 pt-12 text-center sm:my-40 sm:ml-4 hover:text-white'>The Logical Indian also talks about how we cared for the needful dogs.</h1></a>
              </Parallax>
              <img src={media6} alt='' className='w-5/6 my-12 mx-auto' ></img>
              <Parallax speed={speed}>
              <a href='https://hercircle.in/engage/get-inspired/trending/5-NGOs-That-Cared-For-Those-In-Need-This-Diwali-1638.html'><h1 className='font-bold sm:text-6xl sm:pt-24 pt-12 sm:my-28 text-4xl text-center hover:text-white'>PerroAyuda was recognized by Her Circle for being one of the animal welfare NGOs who took care of pets in festive season.</h1></a>
              </Parallax> 
          </div>
      </div>
      </div>
      <Footer/>
  </div>
  );
};

export default Media;
