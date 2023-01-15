import React from "react";
import Button from "../ui/Button";
import image from "../assets/me.jpg";
import { ParallaxHover } from "react-parallax-hover";
import pdf from "../data/sample.pdf#toolbar=0";

export default function AboutMe(props) {
  const about = "aboutme";

  return (
    <div
      className='background-ko text-center h-screen
      flex flex-col items-center justify-center gap-5
      mini:h-full mini:py-20 mini: px-10 mini:grid mini:grid-cols-2 mini:justify-center mini:gap-0
      '>
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

      <div className='mb-6 slide mini:col-span-2 mini:mb-10'>
        <h1 className='section-title-green mini:section-mini'>about me</h1>
      </div>

      <div className='mb-5 shadow-ko slide slide-image 
      mini:mb-0 mini:justify-self-center'>
        <ParallaxHover
          width={280}
          height={280}
          scale={3}
          borderRadius={2}
          shadow={2.5}
          rotation={2.5}>
          <img className='mini:self-center' src={image} alt='profile-pic' />
        </ParallaxHover>
      </div>

      <div className='p-6 slide slide-paragraph flex flex-col items-center
        mini:justify-self-center mini:p-0 mini:items-start mini:w-[auto] mini:max-w-[20rem]'>
        <p className='text-white mini:text-start'>
          I'm an Information Technology graduate, an aspiring self-taught React
          Web Developer. Currently taking up online courses to expand my
          knowledge in Web Development.
        </p>

        <p className='text-[.9rem] mt-5 text-white mb-[2rem]'>
          I ♥️ Music, Coffee & Technology.
        </p>

        <div className='slide slide-button '>
          <a href={pdf} target='_blank'>
            <Button about={about}>View Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
