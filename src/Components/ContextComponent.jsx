import React from "react";
import { useBearStore } from "./useBearStore";
import "./style.css";

export default function ContextComponent() {
  const bears = useBearStore((state) => state.bears);

  function bearCounter() {
    1;
    const bears = useBearStore((state) => state.bears);
    return (
      <>
        <h1>{bears}</h1>
        <h1 className='font-bold mb-5'>
          <span className={bears > 0 ? "spanner" : null}>Bear</span> around here
        </h1>
        <h1
          className={`${
            bears >= 10 ? "visible" : "invisible"
          } font-bold transition-all duration-200 ease`}>
          wow! that is a lot of bear...
        </h1>
      </>
    );
  }

  function add() {
    const increasePopulation = useBearStore(
      (state) => state.increasePopulation,
    );
    return (
      <button
        className='bg-slate-100 py-2 px-4 border-2 grow'
        onClick={increasePopulation}>
        plus
      </button>
    );
  }

  function decreasePopulation() {
    const removeAllBears = useBearStore((state) => state.decreasePopulation);
    return (
      <button
        onClick={removeAllBears}
        className='bg-slate-100 py-2 px-4 border-2'>
        -
      </button>
    );
  }

  function Reset() {
    const resetAllBears = useBearStore((state) => state.reset);
    return (
      <button
        className={`${
          bears >= 1
            ? "border-blue-500"
            : bears == 0
            ? "border-gray-300"
            : "border-red-500"
        } bg-slate-100 py-2 px-5 border-4 transition-all duration-75 ease-in-out`}
        onClick={resetAllBears}>
        reset
      </button>
    );
  }

  console.table(bears);
  return (
    <div className='flex flex-col items-center py-10'>
      {bearCounter()}
      <div>
        {decreasePopulation()}
        {add()}
      </div>
      {Reset()}
    </div>
  );
}
