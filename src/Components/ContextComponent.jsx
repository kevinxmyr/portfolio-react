import React from "react";
import StoreContextProvider, { useStoreContext } from "./StoreContextProvider";

const Winner = () => {
  const { teamA, teamB } = useStoreContext();
  return (
    <div className='ring-2 p-5'>
      <h1>Winner</h1>
      <h4>
        {teamA === teamB ? (
          <p className='font-bold text-[orange]'>DRAW</p>
        ) : teamA > teamB ? (
          <p className="text-[blue]">"Team A</p>
        ) : (
         <p className="text-[red]">"Team A</p>
        )}
      </h4>
    </div>
  );
};

const Player = ({ label, score, onIncrease, onDecrease }) => {
  <div className='bg-blue-500 ring-4'>
    <h2>{label}</h2>
    <h2>{score}</h2>
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  </div>;
};

const PlayerA = () => {
  const { teamA, increaseTeamAScore, decreaseTeamAScore } = useStoreContext();

  return (
    <>
      <Player
        label={"Team A"}
        score={teamA}
        onIncrease={increaseTeamAScore}
        onDecrease={decreaseTeamAScore}
      />
    </>
  );
};
const PlayerB = () => {
  const { teamB, increaseTeamBScore, decreaseTeamBScore } = useStoreContext();

  return (
    <Player
      label={"Team B"}
      score={teamB}
      onIncrease={increaseTeamBScore}
      onDecrease={decreaseTeamBScore}
    />
  );
};

const Players = () => {
  console.log("players");
  return (
    <div className='p-5 bg-slate-200'>
      <h3>Players</h3>
      <div>
        <PlayerA />
        <PlayerB />
      </div>
    </div>
  );
};

export default function ContextComponent() {
  return (
    <div className='flex flex-col items-center p-5 border-8  border-purple-500'>
      <StoreContextProvider>
        <Winner />
        <Players />
      </StoreContextProvider>
    </div>
  );
}
