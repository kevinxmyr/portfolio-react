import React from 'react';
// import { AiFillHtml5 } from 'react-icons/ai';
// import { DiCss3 } from 'react-icons/di';
// import { SiJavascript, SiTailwindcss, SiReact } from 'react-icons/si';
// import { FaGit } from 'react-icons/fa';
// import vscode from '../assets/vscode.png';
import { techstacks } from '../data/techstacks';
import { useInView, motion } from "framer-motion";


export default function Stacks(props) {
  // const stacks = 'stacks';
  const [dim, setDim] = React.useState(screen.width);
  
  const ref = React.useRef(null);
  const isInView =  useInView(ref, { once: true }); //set this to false when in view to play animation over again

  React.useEffect(() => {
    function resizeFunction() {
      setDim(screen.width);
    }
    window.addEventListener('resize', resizeFunction);
  });

  function sizeForIcon() {
    if (dim >= 768) {
      return 73;
    } else {
      return 60;
    }
  }
  
  const container = {
    // hidden: { opacity: 0, scale: 0},
    visible: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 1,
    transition: {
        delayChildren: isInView ? 0.750 : 0,
        staggerChildren: isInView ? 0.25 : 0,
      },
    },
  };

  const item2 = {
    // hidden: { y: 20, opacity: 0 },
    visible: {
      y: isInView ? 0 : 20,
      opacity: isInView ? 1 : 0,
    },
  };
  //! DONT REMOVE FOR MANUAL MODE
  // function panghtml() {
  //   if(dim >= 768) {
  //     return  <AiFillHtml5 size={100} />
  //   }
  //   else {
  //     return <AiFillHtml5 size={50} />
  //   }
  // }

  //?USING MAP METHOD, PWEDE DIN YUNG NAKA COMMENT OUT PERO MAHABA.
  
  return (
    <div className="flex flex-col items-center py-20">
    
      <motion.h1  ref={ref} initial={{opacity: 0}} animate={{y: isInView ? "-.6rem" : 0, opacity: isInView ? 1 : 0}} transition={{duration: .500, ease: "easeOut"}}
      className="uppercase section-title-white mb-12
      laptop:text-sectionTitleLaptop">technology i use</motion.h1>

      <motion.ul variants={container} initial={"hidden"} animate={"visible"} 
        className="grid grid-cols-2 gap-7 mini:flex mini:flex-wrap mini:justify-center">
      
        {techstacks.map((item, i) => {
          const { Icon, techname } = item;

          return (
            <motion.li variants={item2}
              key={i}
              className="flex flex-col items-center gap-3
              mini:w-[22.5%] laptop:w-[20%] laptop:flex ">
              <Icon
                className={`${
                  techname === 'React JS' ? 'animate-spin-slow' : null
                }
                `}
                size={sizeForIcon()}
              />
              {techname}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

{
  /* <div className="bg-[var(--puti)] flex items-center flex-col p-10 z-10">

<style >{`
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
   opacity: 1;
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
  <h1 className={`${stacks === "stacks" ? "section-title-white" : null} mini-section-title`}>
    Technolgy i use
  </h1>
</div>

<div className="grid grid-cols-2 ring- gap-10">
  <div className={`pang-flex ${dim >= 768 ? null : 'html'}`}>
    {
      panghtml()
    }
    HTML 5
  </div>
  <div className=" pang-flex css">
    <DiCss3 size={50} />
    CSS3
  </div>
  <div className=" pang-flex js">
    <SiJavascript size={50} />
    <p className="mt-3">JavaScript ES6</p>
  </div>
  <div className=" pang-flex">
    <SiTailwindcss size={50} />
    <p className="mt-3">Tailwind CSS</p>
  </div>
  <div className=" pang-flex">
    <FaGit className="animate-bounce-slow" size={50} />
    <p className="mt-3">Git</p>
  </div>
  <div className=" pang-flex">
    <SiReact
      className="animate-spin-slow hover:animate-spin-fast"
      size={50}/>
    <p className="mt-3">ReactJs</p>
  </div>
  <div className=" m-[0_auto] col-span-2 flex flex-col">
    <img className="w-[3rem] mb-3 self-center" src={vscode} alt="vscode" />
    <p className="">Visual Studio Code</p>
  </div>
</div>

</div> */
}
