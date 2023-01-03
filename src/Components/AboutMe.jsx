import React from "react";
import Button from "../ui/Button";
import image from '../assets/me.jpg'

export default function AboutMe(props) {
  const about = "aboutme";

  return (
    <div className='background-ko text-center h-screen
    flex flex-col items-center justify-center gap-5'>

      <div>
         <h1 className='uppercase text-white font-bold
         text-[1.7rem]'>about me</h1>
      </div>

      <div>
        <img className="h-[18rem]" src={image} alt='profile-pic' />
      </div>

      <div>
        <p className="text-white">
          Hi! my name is Kevin, I am an Information Technology graduate, an
          aspiring Web Developer. Currently taking up online course to expand my
          knowledge in Web Development.
        </p>
        <p className="text-[.8rem] mt-5 text-white">I ♥️ Music, Coffee & Technology.</p>
      </div>

      <div className="mt-5">
        <Button about={about}>View Resume</Button>
      </div>

    </div>
  );
}
