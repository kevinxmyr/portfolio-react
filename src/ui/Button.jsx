import React from 'react'
import './button.css'

export default function Button({children, bahay, about}) {
   console.log(about);
  return (
    <div className='font-mont'>
      <button className={bahay === 'home' ? 'button-knowmore-green' :
      about === 'aboutme' ? 'button-white' : null}>{children}</button>
    </div>
  )
}
