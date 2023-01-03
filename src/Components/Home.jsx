import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  const bahay = 'home';

  return (
    <div
      className='w-full h-screen flex flex-col justify-center items-center p-5
    font-bold font-mont'>
      
      <style jsx>{`
         .animationkuno {
            animation: slide 1.5s cubic-bezier(0,1,.86,.95) 500ms forwards;
         }
         .reveal1 {
            animation: revealeffect 1.5s cubic-bezier(0,1,.86,.95) 1500ms forwards;
         }
         @keyframes slide {
            from{
               transform: translate(-20px, 0px);
               opacity: 0;
            } to {
               transform: translate(0px, 0px);
               opacity: 1;
            }
         }
         @keyframes revealeffect {
            from {
               transform: translate(0px, 20px);
               opacity: 0;
            } 
            to {
               transform: translate(0px, 0px);
               opacity: 1;
            }
         }
      `}</style>

      <div className='text-[2.3rem] text-center mb-5'>
        <h1 className="animationkuno opacity-0">
          Hi, my name is <span className='kevin-span'>Kevin</span>
          <br />
          I'm a Web Developer.
        </h1>
      </div>

      <Link className="reveal1 opacity-0" to='/aboutme'>
        <div className=''>
          <Button bahay={bahay}>Know More</Button>
          {/* <FiArrowRight /> */}
        </div>
      </Link>

    </div>
  );
};

export default Home;
