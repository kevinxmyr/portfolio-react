import React from 'react'
import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'
import { FaChevronDown } from 'react-icons/fa';



export default function Footer() {

   const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
   }

  return (
    <div className='bg-[var(--gray)] text-white flex justify-center items-center flex-col gap-4
    h-[18rem]'>

      <div className="arrow cursor-pointer" onClick={scrollToTop}>
        <FaChevronDown size={20} fill='white' style={{transform: 'rotate(180deg)'}}/>
      </div>


      <div className='text-white mb-5'>
         <ul className='flex gap-11'>
            <li onClick={() => window.open('https://www.github.com/kevinxmyr')} className='socials'><ImGithub fill='#fafafa' size={30}/></li>
            <li onClick={() => window.open('https://ph.linkedin.com/in/kev-punongbayan')} className='socials'><ImLinkedin2 fill='#fafafa' size={30}/></li>
            <li onClick={() => window.open('https://www.fb.com/')} className='socials'><SiFacebook fill='#fafafa' size={30}/></li>
         </ul>
      </div>
      <div className=' w-[48%]'>
         <hr className='hr--style'/>
      </div>

      <div>
         <small className='text--color cursor-default'>© 2023 – <span className='text--color hover:text-[var(--berde)]'>Kevin Punongbayan</span></small>
      </div>

    </div>
  )
}
