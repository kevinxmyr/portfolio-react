import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Framer() {
  const [state, setState] = React.useState(false)
  return (
    <div className={`bg-gradient-to-r from-indigo-200 via-red-200 to-cyan-200 h-screen
    flex justify-center items-center`}>
      <motion.div layout className={`h-[5.2rem] w-[10rem] bg-white/50 rounded-full
     flex ${state ? 'justify-end bg-green-300' : 'justify-start'} hover:cursor-pointer`} 
      onClick={() => setState(!state)}>
        <motion.div transition={spring} layout className='rounded-full w-[4.2rem] h-[4.2rem] 
        ml-[10px] mt-[7.2px] mr-3 bg-white flex justify-center items-center'>
          {
            state ? <p className='font-bold text-[1.2rem] text-[#86EFAC]'>On</p> : 
            <p className='font-bold text-[#1a1a1a] text-[1.2rem]'>Off</p>
          }
        </motion.div>
      </motion.div>

      <motion.div>
        <motion.div layout
         className='w-[6rem] h-[6rem] bg-white rounded-full flex justify-center items-center'>
          <div className='rounded-full w-[2rem] h-[2rem] bg-[pink]'></div>
        </motion.div>
      </motion.div>
      <button class="btn btn-secondary hover:btn-accent-focus">Button</button>
    </div>
  )
}
const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 50,
  duration: .50
}
export default Framer



// !IN VIEW WITH CHILDREN
// import React, { useRef, useState, useEffect } from "react";
// import { useInView } from "framer-motion";

// function Framer() {
//   const Parent = ({ children }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: false });
//     console.log("FROM CLG:", isInView);

//     useEffect(() => {
//       console.log("Element is in view", isInView);
//     }, [isInView]);

//     return (
//       <div
//         className='h-[110vh] w-full font-bold text-[5rem] flex
//       justify-center bg-red-200 border-red-500 border-2 text-white'
//         ref={ref}>
//         <span style={{
//           transform: isInView ? "none" : "translateX(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
//         }}>{children}</span>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Parent>Shanaya</Parent>
//       <Parent>Arkin</Parent>
//       <Parent>Punongbayan</Parent>
//       <Parent>Four</Parent>
//       <Parent>Five</Parent>
//     </>
//   );
// }

// export default Framer;

// import React from "react";
// import { motion } from "framer-motion";
// //https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/
// //https://www.framer.com/motion/
// const testvariant = {
//    initial:{ x: '-100px' },
//      animate:{ x: '0px' },
//      transition:{
//        type: "spring",
//        stiffness: 1000,
//        duration: 2,
//        delay: "1"
//      }
// }

// function Framer() {
//   return (
//    <div className="flex m-20 flex-col items-center ring-1 ">
//    <motion.h1 className="bg-slate-300"
//      variants={testvariant} initial='initital' animate='animate'>
//      This is a motion h1
//    </motion.h1>
//    <motion.h2
//      initial={{ y: -1000 }}
//      animate={{ y: 0 }}
//      transition={{
//        type: "tween",
//        duration: "1",
//        delay: ".4"
//      }}>This is a motion h2
//    </motion.h2>
//    <motion.h3
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}>
//       This is a motion h3
//    </motion.h3>
//    <motion.h4
//     initial={{ scale: 0.7 }}
//     animate={{ scale: 1.7 }}
//     transition={{
//       type: "tween",
//       duration: "2",
//       delay: "1"
//     }}>
//       This is a motion h4
//    </motion.h4>
//  </div>
//   );
// }

// export default Framer;