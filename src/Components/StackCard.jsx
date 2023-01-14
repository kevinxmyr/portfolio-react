import React from "react";
import { techstacks } from "../data/techstacks";

function StackCard() {
  console.log(techstacks[0].techname);
  return (
   <div>
      {
         techstacks
      }
   </div>
  )
}

export default StackCard;
