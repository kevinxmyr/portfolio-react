import React from 'react';
import { useBearStore } from './useBearStore';

export default function ContextComponent() {
  const bears = useBearStore((state) => state.bears);

  function bearCounter() {
    const bears = useBearStore((state) => state.bears);
    return (
      <>
        <h1>{bears}</h1>
        <h1 className="font-bold mb-5">bears around here</h1>
      </>
    );
  }

  function add() {
    const increasePopulation = useBearStore(
      (state) => state.increasePopulation
    );
    return (
      <button
        className="bg-slate-100 py-2 px-4"
        onClick={increasePopulation}>
        +
      </button>
    );
  }

  function decreasePopulation() {
    const removeAllBears = useBearStore((state) => state.decreasePopulation);
    return (
      <button
        onClick={removeAllBears}
        className="bg-slate-100 py-2 px-4">
        -
      </button>
    );
  }

  function Reset() {
    const resetAllBears = useBearStore((state) => state.reset);
    return (
      <button
        className="bg-slate-100 py-2 px-4"
        onClick={resetAllBears}>
        reset
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center py-10">
      {bearCounter()}
      <div>
        {decreasePopulation()}
        {add()}
      </div>
      {Reset()}
    </div>
  );
}


