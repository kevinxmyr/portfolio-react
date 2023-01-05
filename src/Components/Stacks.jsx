import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiTailwindcss } from 'react-icons/si'
import { FaGit } from 'react-icons/fa'

export default function Stacks() {
   const stacks = 'stacks';

  return (
    <div className='bg-[var(--puti)] flex items-center flex-col pt-10'>
      <style jsx>{`
         .pang-flex {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
         }
      `}</style>
      <div className='mb-7'>
         <h1 className={stacks === 'stacks' ? 'section-title-white' : null}>Tech i use</h1>
      </div>

      {/*<div className='flex flex-wrap gap-10 p-10'>
         <div className='ring-1 m-auto pang-flex'><AiFillHtml5 size={100}/>HTML 5</div>
         <div className='ring-1 m-auto pang-flex'> <DiCss3 size={100}/> CSS 3 </div>
         <div className='ring-1 mx-0 my-5 pang-flex mr-10'> <SiJavascript size={100}/>Javacript ES6</div>
         <div className='ring-1 my-5 pang-flex'><SiTailwindcss size={100}/>Tailwind CSS</div>
         <div className='ring-1 mx-0 my-5 pang-flex'><FaGit size={80}/> Git</div>
      </div> */}
      
      <div className='grid grid-cols-2 ring- gap-10'>
         <div className='ring- pang-flex'><AiFillHtml5 size={130}/>HTML 5</div>
         <div className='ring- pang-flex'><DiCss3 size={130}/>CSS3</div>
         <div className='ring- pang-flex'><SiJavascript size={100}/>
            <p className='mt-3'>JavaScript ES6</p>
         </div>
         <div className='ring- justify-self-center'><SiTailwindcss size={100}/>
            <p className='mt-3'>Tailwind CSS</p>
         </div>
         <div className='ring- justify-self-center'><FaGit size={100}/></div>

      </div>

    </div>
  )
}
