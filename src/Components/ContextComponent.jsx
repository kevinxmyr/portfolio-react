import React from 'react';
import { useBearStore } from './useBearStore';

function ContextComponent() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => {
    state.increasePopulation;
  });

  function bearCounter() {
    const bears = useBearStore((state) => state.bears);
    return <h1 className="font-bold mb-5">{bears} around here ...</h1>;
  }

  function Controls() {
    const increasePopulation = useBearStore(
      (state) => state.increasePopulation
    );
    return (
      <button
        className="bg-slate-100 py-2 px-4 border-2 border-blue-500"
        onClick={increasePopulation}>
        +
      </button>
    );
  }

  function Remove() {
    const removeAllBears = useBearStore((state) => state.removeAllBears);
    return (
      <button onClick={removeAllBears} className="bg-slate-100 py-2 px-4 border-2 border-blue-500">
        -
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center py-10">
      {bearCounter()}
      <div>
        {Controls()}
        {Remove()}
      </div>
    </div>
  );
}

export default ContextComponent;
