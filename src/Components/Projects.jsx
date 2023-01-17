import React from 'react';
import { projects } from '../data/projects';
import Button from '../ui/Button';
import { ParallaxHover } from 'react-parallax-hover';
import { useStateStore } from './useStateStore';
//https://www.youtube.com/watch?v=ZCllX1p763U&ab_channel=CoderOne
export default function Projects() {
  const proyekto = 'projects';
  const screenWidth = useStateStore((state) => state.screenWidth);
  const updateScreenWidth = useStateStore((state) => state.updateScreenWidth);

  function projectImageSizeWidth() {
    if(screenWidth >= 1200) {
      return 600
    }
    else if (screenWidth >= 391 && screenWidth <= 767) {
      return 730
    }
  }
  function projectImageSizeHeight() {
    if(screenWidth >= 1200) {
      return 500
    }
    else if (screenWidth >= 391 && screenWidth <= 767) {
      return 300
    }
  }

  return (
    <div
      className="bg-slate-300 p-5 flex flex-col gap-16 py-20
    background-ko">
      <div className="self-center">
        <h1
          className="section-title-green
        laptop:text-sectionTitleLaptop">
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
            laptop:px-10"
            key={projectTitle}>
            
            {/* FOR TITLE-DESCRIPTION-HASHTAG & BUTTON */}
            <div className='flex flex-col gap-4 ring-4
            laptop:w-[50%]'>
              {/* title */}
              <div className="">
                <h1
                  className="font-bold text-[1.3rem]
              laptop:text-projectTitleLaptop">
                  {projectTitle}
                </h1>
              </div>

              {/* description */}
              <div className='laptop:ring-4'>
                <p className="">{description}</p>
              </div>
              {/* TECH */}
              <div className='ring-4'>
                <code className="text-[.9rem] opacity-[.8]">
                  <i>{tech}</i>
                </code>
              </div>

              <div className="uppercase ring-4">
                <a
                  href={projUrl}
                  target="_blank">
                  <Button projects={proyekto}>Live Preview</Button>
                </a>
              </div>
            </div>

            {/* image */}
            <div className="laptop:ring-4 laptop:self-center
            laptop:justify-items-center ring-4 ring-red-200">
              <ParallaxHover className=''
                width={projectImageSizeWidth()}
                height={projectImageSizeHeight()}
                scale={3}
                borderRadius={2}
                shadow={2.5}
                rotation={2.5}>
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt="proj-image"
                />
              </ParallaxHover>

              {/* https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/ */}
              {/* https://www.youtube.com/watch?v=KQ21gTWU-rM&ab_channel=NickWhite */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
