import React from "react";
import "./button.css";

export default function Button({ children, bahay, about, projects, contact }) {
  return (
    <div className="font-mont">
      <button
        className={
          bahay === "home"
            ? "button-knowmore-green flex justify-evenly items-center gap-2"
            : about === "aboutme"
            ? "button-white"
            : projects === 'projects'
            ? "button-white"
            : contact === 'contact'
            ? 'button-knowmore-green'
            : null
        }
      >
        {children}
      </button>
    </div>
  );
}
