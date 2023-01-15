import React from 'react';
import { projects } from '../data/projects';
import Button from '../ui/Button';
import { ParallaxHover } from 'react-parallax-hover';

export default function Projects() {
  const proyekto = 'projects';

  return (
    <div
      className="bg-slate-300 p-5 flex flex-col gap-16 py-12
    background-ko">
      {/* ----------------------MANUAL MODE------------------ */}
      <div className="self-center">
        <h1 className="section-title-green">Projects</h1>
      </div>

      {/* <div>
        <h2>Project Title</h2>
      </div>

      <div>
        <p>
          A simple ReactJS app with Search filter functionality, updates the
          display to show filtered names. Using an API to fetch data. Check it
          out!
        </p>
      </div>
      
      <div>
        <button>See it Live</button>
      </div> */}

      {/* ----------------------FROM OBJECT------------------ */}
      {projects.map((data) => {
        const { projectTitle, description, image, projUrl, tech } = data;

        return (
          <div
            className="text-white flex flex-col gap-5"
            key={projectTitle}>
            {/* title */}
            <div className="ring-red-500">
              <h1 className="font-bold text-[1.3rem]">{projectTitle}</h1>
            </div>

            {/* description */}
            <div>
              <p className="">{description}</p>
            </div>
            {/* TECH */}
            <div>
              <code className='text-[.9rem] opacity-[.8]'><i>{tech}</i></code>
            </div>

            <div className="uppercase">
              <a href={projUrl} target='_blank'>
                <Button projects={proyekto}>See Live</Button>
              </a>
            </div>

            {/* image */}
            <div className="w-[auto] ">
              {/* <ParallaxHover
                width={350}
                scale={3}
                borderRadius={2}
                shadow={2.5}
                rotation={2.5}> */}
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt="proj-image"
                />
              {/* </ParallaxHover> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
