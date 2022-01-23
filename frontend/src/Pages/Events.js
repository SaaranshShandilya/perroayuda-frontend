import React from "react";
import { Footer } from "../Components/Footer";
import NavBar from "../Components/Navbar";
import dog2 from "../images/dog2.png";

const Events = () => {
  return (
    <div>
      <NavBar />
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
            {" "}
            Events{" "}
          </h1>
          <p className=" text-white text-xl mt-8 ml-8 pb-40">Home / Events</p>
        </div>
      </div>
      <div className=" sm:mx-40 mt-12 ">
        <p className="text-3xl font-semibold">
          ‘Who feeds a hungry animal, feeds his own soul.’ – Charlie Chaplin
        </p>
        <p className="text-xl mt-6">
          When you feed a stray and they come at you wiggling their tail, isn’t
          that the best feeling in this world? PWF offers you this extraordinary
          feeling every week. Our organisation conduct weekly drives in
          different areas, where volunteer’s from various places come together
          and meet at a specific location. Volunteer’s are told to bring bowls
          so that we can feed a large amount of strays at once. Feeding drives
          are organised at those locations where the least amount of sources for
          food and care is available but a big amount of strays to be taken care
          of. The purpose of our drive is to be able to feed and take care of as
          many as possible number of animals at one specific time. Sometimes, at
          our drive we find people in daily crowds who are willing to help us by
          donating food or money for the strays. This act of kindness is
          appreciated a lot. We come across a lot of different situations while
          feeding in the areas. We find rescue cases, cruelty cases, wounded/
          injured animals or illegal breeders. Our team takes an action on the
          spot as required. We manage to feed approximately 100-150 dogs in a
          day which fulfills our motive. Feeding drives are also a way for us to
          spread awareness in different part of that area. As we move in small
          lanes and societies, people around tend to focus on what we’re doing
          and ask us questions about what we are doing and where we are from. We
          explain every person in detail about our organisation and clear their
          doubts. Safety of our volunteer’s are our first priority as in some
          cases people living in some areas argue and get aggressive when we try
          to feed their locality strays. But that does not hold us back as High
          Court of Delhi in 2011 passed an order asking the police to provide
          protection to dogs and dog feeders and has made it a punishable
          offence in case anyone restricts, prohibits or causes inconvenience to
          any person feeding a street dog or resorts to removal dislocation or
          killing of a dog. We feed not for anything but love that we get in
          return. Our team welcomes you any day and will not lack in making it
          the best day for both, the feeders and the strays. Their happiness and
          well being is our responsibility.
        </p>
        <p className="text-amber-500  my-4 text-2xl font-bold">Mega Feeding Drive - 19/12/2021 - Lajpat Nagar</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
