import React from "react";
import Button from "../ui/Button";
import image from "../assets/me.jpg";
import { ParallaxHover } from "react-parallax-hover";
import pdf from "../data/sample.pdf#toolbar=0";

export default function AboutMe(props) {
  const about = 'aboutme';
  
  return (
    <div
      className='background-ko text-center h-screen
    flex flex-col items-center justify-center gap-5'>

      <style>{`
      .slide {
        position: relative;
        animation: slideup 1s ease both;
      }
      .slide-image {
        animation-delay: 250ms;
      }
      .slide-paragraph {
        animation-delay: 500ms;
      }
      .slide-button {
        animation-delay: 750ms;
      }
      
      @keyframes slideup {
        from {
          bottom: -1rem;
          opacity: 0;
        }
        to {
          bottom: 0;
          opacity: 1;
        }
      }
    `}</style>

      <div className='mb-6 slide'>
        <h1 className='section-title-green'>about me</h1>
      </div>

      <div className='mb-5 shadow-ko slide slide-image'>
        <ParallaxHover
          width={250}
          height={250}
          scale={3}
          borderRadius={2}
          shadow={2.5}
          rotation={2.5}>
          <img className='' src={image} alt='profile-pic' />
        </ParallaxHover>
      </div>

      <div className='p-6 slide slide-paragraph'>
        <p className='text-white'>
          I'm an Information Technology graduate, an aspiring self-taught React
          Web Developer. Currently taking up online courses to expand my
          knowledge in Web Development.
        </p>
        <p className='text-[.8rem] mt-5 text-white'>
          I ♥️ Music, Coffee & Technology.
        </p>
      </div>

      <div className='slide slide-button'>
        <a href={pdf} target='_blank'>
          <Button about={about}>View Resume</Button>
        </a>
      </div>
    </div>
  );
}
