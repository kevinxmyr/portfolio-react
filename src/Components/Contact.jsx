import React from 'react';
import Button from '../ui/Button';

export default function Contact() {
  const contact = 'contact';

  const [display, setDisplay] = React.useState(false)

  setTimeout(() => {
    setDisplay(true)
  }, 2000)

  return (
    <div className={`flex justify-center flex-col items-center px-10 py-20 gap-5`}>
      <div className="mt-[-1.5rem]">
        <h1 className="section-title-white">CONTACT</h1>
      </div>

      <div className="mt-5">
        <p className="font-bold text-[var(--itim2)] text-center">
          Contact me!
        </p>
      </div>

      <div>
        <a
          href='mailto: punongbayan.kev@gmail.com'
          target="_blank">
          <Button contact={contact}>Send E-mail</Button>
        </a>
      </div>
    </div>
  );
}
