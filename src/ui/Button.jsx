import React from "react";
import "./button.css";

export default function Button({ children, bahay, about, projects }) {

console.log(projects);
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
            : null
        }
      >
        {children}
      </button>
    </div>
  );
}
