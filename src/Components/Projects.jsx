import React from "react";
import { projects } from "../data/projects";
import Button from "../ui/Button";
import { ParallaxHover } from "react-parallax-hover";
import { useStateStore } from "./useStateStore";
import { motion } from 'framer-motion'

//https://www.youtube.com/watch?v=ZCllX1p763U&ab_channel=CoderOne

export default function Projects() {
  const proyekto = "projects";
  const screenWidth = useStateStore((state) => state.screenWidth);

  function projectImageSizeWidth() {
    if (screenWidth >= 1200) {
      return 600;
    } else if (screenWidth >= 391 && screenWidth <= 767) {
      return 730;
    }
  }
  function projectImageSizeHeight() {
    if (screenWidth >= 1200) {
      return 500;
    } else if (screenWidth >= 391 && screenWidth <= 767) {
      return 300;
    }
  }
    
  return (
    <div
      className="bg-slate-300 p-5 flex flex-col gap-16 py-20
    background-ko">
      <div className="self-center">
        <h1 className="section-title-green laptop:text-sectionTitleLaptop test">
          Projects
        </h1>
      </div>

      {/* ----------------------FROM OBJECT------------------ */}
      {projects.map((data) => {
        const { projectTitle, description, image, projUrl, tech } = data;

        return (
          <div
            className="text-white flex flex-col gap-5
            laptop:flex laptop:flex-row laptop:justify-between
            laptop:px-10 mini:items-start mini:justify-start
            mini:flex mini:flex-col laptop:gap-10 laptop:m-[0_auto]
            laptop:max-w-[1300px]"
            key={projectTitle}
          >
            {/* FOR TITLE-DESCRIPTION-HASHTAG & BUTTON */}
            <div
              className="flex flex-col gap-4 w-full
            laptop:w-[50%] m-[0_auto] max-w-[800px]
            mini:self-start mini:w-full
            "
            >
              {/* title */}
              <div className="">
                <h1
                  className="font-bold text-[1.3rem]
              laptop:text-projectTitleLaptop"
                >
                  {projectTitle}
                </h1>
              </div>

              {/* description */}
              <div className="">
                <p className="">{description}</p>
              </div>
              {/* TECH */}
              <div className="">
                <code className="text-[.9rem] opacity-[.8]">
                  <i>{tech}</i>
                </code>
              </div>

              <div className="uppercase ">
                <a
                  href={projUrl}
                  target="_blank"
                >
                  <Button projects={proyekto}>Live Preview</Button>
                </a>
              </div>
            </div>

            {/* image */}
            <div
              className="laptop:  max-w-[50rem] m-[0_auto] laptop:self-center
            laptop:justify-items-center"
            >
              <img
                className="w-screen
                  h-full object-cover"
                src={image}
                alt="proj-image"
              />

              {/* https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/ */}
              {/* https://www.youtube.com/watch?v=KQ21gTWU-rM&ab_channel=NickWhite */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
