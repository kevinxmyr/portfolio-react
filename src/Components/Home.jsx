import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Home = () => {
  const bahay = 'home';
  
  return (
    <div
      className='w-full h-screen flex flex-col justify-center items-center p-5
    font-bold font-mont'>

      <div className='text-[2.3rem] text-center'>
        <h1>
          Hi, my name is <span className='kevin-span'>Kevin</span>
          <br />
          I'm a Web Developer.
        </h1>
      </div>

      <Link to='/aboutme'>
        <div className='mt-5'>
          <Button bahay={bahay}>Know More</Button>
        </div>
      </Link>

    </div>
  );
};

export default Home;
