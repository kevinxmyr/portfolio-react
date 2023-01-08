import React from 'react';
import Button from '../ui/Button';

export default function Contact() {
  const contact = 'contact';
  const mailchimp = 'https://mailchi.mp/65572a019bb3/landing-page-sign-up';

  return (
    <div className=" flex justify-center flex-col items-center px-10 py-20 gap-5">
      <div className="mt-[-1.5rem]">
        <h1 className="section-title-white">CONTACT</h1>
      </div>

      <div className="mb-5">
        <p className="text-center">
          By clicking the button below you agree on terms & conditions.
        </p>
      </div>

      <div>
        <a
          href={mailchimp}
          target="_blank">
          <Button contact={contact}>Contact Me!</Button>
        </a>
      </div>
    </div>
  );
}
