import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiReact } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { techstacks } from "../data/techstacks";

export default function Stacks() {
  const stacks = "stacks";
  const history = useHistory();

  return (
    <div className="bg-[var(--puti)] flex items-center flex-col p-10 z-10">
      <style>{`
        .pang-flex {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .js{
         position: relative;
         z-index: 2;
        }
        .js:after {
         content: '';
         position: absolute;
         height: 40px;
         width: 42px;
         bottom: 40px;
         background-color: #f7df1e;
         z-index: -1;
         opacity: .7;
        }
        .css{
         position: relative;
         z-index: 2;
        }
        .css:after {
         content: '';
         position: absolute;
         height: 35px;
         width: 35px;
         bottom: 30px;
         background: linear-gradient(90deg, rgba(33,76,229,.8) 54%, rgba(36,101,241,.6) 54%);
         z-index: -1;
         -webkit-clip-path: polygon(0 0, 91% 0, 69% 96%, 31% 95%, 20% 68%);
        }
        .html{
         position: relative;
         z-index: 2;
        }
        .html:after {
         content: '';
         position: absolute;
         height: 35px;
         width: 35px;
         bottom: 30px;
         background: linear-gradient(90deg, rgba(228,77,38,.8) 53%, rgba(241,101,41,.6) 53%);
         z-index: -1;
         -webkit-clip-path: polygon(0 0, 91% 0, 75% 93%, 31% 95%, 20% 68%);
        }
      `}</style>

      <div className="mb-7">
        <h1 className={stacks === "stacks" ? "section-title-white" : null}>
          Technolgy i use
        </h1>
      </div>

      {/*<div className='flex flex-wrap gap-10 p-10'>
         <div className='ring-1 m-auto pang-flex'><AiFillHtml5 size={100}/>HTML 5</div>
         <div className='ring-1 m-auto pang-flex'> <DiCss3 size={100}/> CSS 3 </div>
         <div className='ring-1 mx-0 my-5 pang-flex mr-10'> <SiJavascript size={100}/>Javacript ES6</div>
         <div className='ring-1 my-5 pang-flex'><SiTailwindcss size={100}/>Tailwind CSS</div>
         <div className='ring-1 mx-0 my-5 pang-flex'><FaGit size={80}/> Git</div>
      </div> */}

      <div className="grid grid-cols-2 ring- gap-10">
        <div className="ring- pang-flex html">
          <AiFillHtml5 size={50} />
          HTML 5
        </div>
        <div className="ring- pang-flex css">
          <DiCss3 size={50} />
          CSS3
        </div>
        <div className="ring- pang-flex js">
          <SiJavascript size={50} />
          <p className="mt-3">JavaScript ES6</p>
        </div>
        <div className="ring- pang-flex">
          <SiTailwindcss size={50} />
          <p className="mt-3">Tailwind CSS</p>
        </div>
        <div className="ring- pang-flex">
          <FaGit className="animate-bounce-slow" size={50} />
          <p className="mt-3">Git</p>
        </div>
        <div className="ring- pang-flex">
          <SiReact
            className="animate-spin-slow hover:animate-spin-fast"
            size={50}
          />
          <p className="mt-3">ReactJs</p>
        </div>
      </div>
      
      {/* from obj  */}
      <div className="ring-2 mt-10 flex">
        {techstacks.map((item) => {
          const { techname, Icon } = item;

          return (
            
              <div className="basis-2 ring-2 flex flex-col items-center gap-2 p-1" key={techname}>
                <Icon size={50}/>
                <p>{techname}</p>
              </div>
          );
        })}
      </div>
      
      
      <p className="mt-10" onClick={() => history.push("/")}>BACK TO HOMEPAGE</p>
    </div>
  );
}
