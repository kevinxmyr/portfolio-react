import React from "react";
import { techstacks } from "../data/techstacks";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

console.log(techstacks[0].techname);

export default function Stacks() {
  const stacks = "stacks";

  return (
    <div className='bg-[var(--puti)] flex items-center flex-col py-12'>
      <style>{`
         .pang-flex {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
         }
      `}</style>
      <div className='mb-7'>
        <h1 className={stacks === "stacks" ? "section-title-white" : null}>
          Tech i use
        </h1>
      </div>
      {/* COMMENT OUT FLEX STYLE */}
      {/*<div className='flex flex-wrap gap-10 p-10'>
         <div className='ring-1 m-auto pang-flex'><AiFillHtml5 size={100}/>HTML 5</div>
         <div className='ring-1 m-auto pang-flex'> <DiCss3 size={100}/> CSS 3 </div>
         <div className='ring-1 mx-0 my-5 pang-flex mr-10'> <SiJavascript size={100}/>Javacript ES6</div>
         <div className='ring-1 my-5 pang-flex'><SiTailwindcss size={100}/>Tailwind CSS</div>
         <div className='ring-1 mx-0 my-5 pang-flex'><FaGit size={80}/> Git</div>
      </div> */}

      {/* GRID STYLE */}
      <div className='grid grid-cols-2 gap-12'>
        <div className='ring- pang-flex'>
          <AiFillHtml5 size={100} />
          HTML 5
        </div>
        <div className='ring- pang-flex'>
          <DiCss3 size={100} />
          CSS3
        </div>
        <div className='ring- pang-flex'>
          <SiJavascript size={80} />
          <p className='mt-3'>JavaScript ES6</p>
        </div>
        <div className='ring- pang-flex'>
          <SiTailwindcss size={80} />
          <p className='mt-3'>Tailwind CSS</p>
        </div>
        <div className='ring- pang-flex'>
          <FaGit size={65} />
          <p className='mt-3'>Git</p>
        </div>
        <div className='ring- pang-flex'>
          <FaGithubSquare size={80} />
          <p className=''>Github</p>
        </div>
      </div>

      {/* FROM OBJECT AS A VALUE */}
      <div className='w-[20rem] h-full bg-slate-200 ring-4'>
        {techstacks.map((item) => {
          const { Icon, techname } = item;
          return (
            <div className="flex flex-col ring- items-center my-5" key={techname}>
              <div className="mb-3">
                <Icon size={80}/>
              </div>
              <p>{techname}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
