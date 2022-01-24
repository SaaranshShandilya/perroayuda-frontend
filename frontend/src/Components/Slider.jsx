import React from 'react';
import image0 from '../images/carasoul1.png';
import image1 from '../images/carasoul2.png';
import image2 from '../images/carasoul3.png';
import image3 from '../images/carasoul4.png';


import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
const images=[image0, image1, image2, image3]
const links = ['/','/','/','/about-us/']
let count = 0;
const Slider = () => {

    const slideRef = React.useRef();

    React.useEffect(()=>{
        startSlider();
        slideRef.current.addEventListener("animationend", removeAnimation);
    },[]);

    const startSlider = () => {
        setInterval(() =>{
            handleNext();
        }, 5000);
    }

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleNext = () => {
        count = (count + 1) % images.length;
        setCurrentIndex(count)
        slideRef.current.classList.add("fade-anim");
    }
    const handlePrevious = () => {
        count = (currentIndex + images.length - 1) % images.length;
        setCurrentIndex(count)
        slideRef.current.classList.add("fade-anim");
    }
  return (
    <div className=" shadow-2xl m-auto">
    <div ref={slideRef} className="w-full relative select-none">
    <div className="aspect-w-20 aspect-h-9">

      <a href={links[currentIndex]}><img className="w-full my-8  border border-transparent rounded-2xl" src={images[currentIndex]} alt="" /></a>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
        <button className="text-4xl text-white ml-4" onClick={handlePrevious}><AiOutlineArrowLeft/></button>
        <button className="text-4xl text-white" onClick={handleNext}><AiOutlineArrowRight></AiOutlineArrowRight></button>
      </div>
    </div>
  </div>
  );
};

export default Slider;
