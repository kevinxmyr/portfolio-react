import React, { useMemo, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../ui/Button";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const bahay = "home";
  const history = useHistory();
  const [state, setState] = useState(false);
  //https://www.youtube.com/watch?v=UcHkC5sJPWw&ab_channel=MariusEspejo
  //https://blog.logrocket.com/managing-react-state-zustand/ 
  return (
    <div
      className='w-full h-screen flex flex-col justify-center items-center p-5
    font-bold font-mont lg:items-start lg:ml-10 '>
      
      <style>{`
        .animationkuno {
          animation: slide 1.5s cubic-bezier(0, 1, 0.86, 0.95) 500ms forwards;
        }
        .reveal {
          animation: revealeffect 1.5s cubic-bezier(0, 1, 0.86, 0.95) 1500ms
            forwards;
        }
        .galaw {
          position: relative;
          animation: galawgaw 190ms ease-in-out forwards;
          transition: 2s ease;
        }
        @keyframes galawgaw {
          0% {
            left: -100px;
            opacity: 0;
          }
          100% {
            left: 0px;
            opacity: 1;
          }
        }
        @keyframes slide {
          from {
            transform: translate(-20px, 0px);
            opacity: 0;
          }
          to {
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
        <h1 className='animationkuno opacity-0 lg:text-[3.2rem] lg:leading-tight lg:text-start'>
          Hi, my name is <span className='kevin-span'>Kevin</span>
          <br />
          I'm a Web Developer.
        </h1>
      </div>

      <Link className='reveal opacity-0' to='/aboutme'>
        <div
          onMouseEnter={() => setState(true)}
          onMouseLeave={() => setState(false)}
          className='reveal opacity-0'>
          <Button bahay={bahay}>
            Learn More
            {state && (
              <FiArrowRight
                stroke='white'
                strokeWidth={3.5}
                className='w-max h-[1.2rem] galaw animate-bounce'
              />
            )}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
