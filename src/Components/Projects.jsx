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
        const { projectTitle, description, image } = data;
        const style = {
          color: 'white',
        };
        return (
          <div
            className="text-white flex flex-col gap-6"
            key={projectTitle}>
            {/* title */}
            <div className="">
              <h1 className="font-bold text-[1.3rem]">{projectTitle}</h1>
            </div>

            {/* description */}
            <div>
              <p className="">{description}</p>
            </div>

            <div className="uppercase">
              <Button projects={proyekto}>See Live</Button>
            </div>

            {/* image */}
            <div className=''>
              <ParallaxHover
                width={350}
                scale={3}
                borderRadius={2}
                shadow={2.5}
                rotation={2.5}>
                <img className='w-full h-full object-cover'
                  src={image}
                  alt="proj-image"/>
              </ParallaxHover>
            </div>
          </div>
        );
      })}
    </div>
  );
}
