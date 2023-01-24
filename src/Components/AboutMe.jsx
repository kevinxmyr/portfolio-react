import React from "react";
import Button from "../ui/Button";
import image from "../assets/me.jpg";
import { ParallaxHover } from "react-parallax-hover";
import pdf from "../data/sample.pdf#toolbar=0";
// zustand state
import { useStateStore } from "./useStateStore";
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useHistory } from "react-router-dom";

export default function AboutMe(props) {
  const about = "aboutme";
  const history = useHistory();
  const screenWidth = useStateStore((state) => state.screenWidth);
  const updateScreenWidth = useStateStore((state) => state.updateScreenWidth);

  const parallaxSize = () => {
    if (screenWidth <= 767) {
      return 210;
    } else if (screenWidth >= 768 && screenWidth <= 1199) {
      return 260;
    } else if (screenWidth >= 1200) {
      return 310;
    }
  };

  React.useEffect(() => {
    window.addEventListener("load", updateScreenWidth);
    window.addEventListener("resize", updateScreenWidth);
  });

  return (
    <div
      className={`text-center h-screen
      flex flex-col items-center justify-center gap-2
      mini:h-full mini:py-24 mini: px-10 mini:grid mini:grid-cols-2 
      mini:justify-center mini:gap-0 laptop:gap-1
      ${screenWidth >= 1200 ? "background-ko-clip" : "background-ko"}
      `}
    >
    {/* BACK ARROW */}
    <div className="absolute top-8 left-5 flex cursor-pointer
    hover:underline hover:decoration-white" onClick={() => history.push('/')}>
      <RiArrowLeftSLine size={40} color="white"/>
      <p className="top-10 text-white ml-[-6px] self-center">Back</p>
    </div>
    
      <style>{`
      .background-ko-clip {
        background: rgb(0, 204, 172);
        background: linear-gradient(
          307deg,
          rgba(0, 204, 172, 1) 19%,
          rgba(2, 170, 176, 1) 78%
        );
        clip-path: polygon(50% 0%, 100% 0, 100% 94%, 0 100%, 25% 100%, 0 100%, 0 0);
      }
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

      <div className="mb-6 slide mini:col-span-2 mini:mb-10">
        <h1
          className="section-title-green mini:section-mini
        laptop:text-sectionTitleLaptop"
        >
          about me
        </h1>
      </div>
      
      <div className="mb-5 shadow-ko slide slide-image 
      mini:mb-0 mini:justify-self-center laptop:justify-self-end
      laptop:mr-10">
        <ParallaxHover
          width={parallaxSize()}
          height={parallaxSize()}
          scale={3}
          borderRadius={2}
          shadow={2.5}
          rotation={2.5}
        >
          <img
            className="mini:self-center"
            src={image}
            alt="profile-pic"
          />
        </ParallaxHover>
      </div>

      <div
        className="p-6 slide slide-paragraph flex flex-col items-center
        mini:justify-self-center mini:p-0 mini:items-start max-w-[450px]
        laptop:w-[100%] laptop:mr-[2rem] laptop:max-w-[30rem] laptop:justify-self-start
        laptop:ml-10"
      >
        <p
          className="text-white mini:text-start max-w-[19rem] text-center
        "
        >
          I'm an Information Technology graduate, an aspiring self-taught React
          Web Developer. Taking up online courses to expand my knowledge in Web
          Development.
        </p>

        <i className={`text-[.9rem] mt-5 text-white mb-[2rem] text-start ${screenWidth <= 391 ? 'hidden' : 'visible'}`} >
          P.S. <br />I ♥️ Coffee, Music & Technology.
        </i>

        <div className="slide slide-button flex gap-2">
          <a
            href={pdf}
            target="_blank"
          >
            <Button about={about}>Resumé</Button>
          </a>
          <a
            href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-1418ec8e-b312-44db-88d8-0d180c85f07d.pdf"
            target="_blank"
          >
            <Button about={about}>Certificate</Button>
          </a>
        </div>
      </div>

    </div>
  );
}
