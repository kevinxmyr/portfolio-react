import React, { useContext, createContext, useState } from "react";

const Context = createContext(null);

const useStore = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  return {
    teamA,
    teamB,

    increaseTeamAScore: () => setTeamA((v) => v + 1),
    decreaseTeamAScore: () => setTeamA((v) => v - 1),
    increaseTeamBScore: () => setTeamB((v) => v + 1),
    decreaseTeamBScore: () => setTeamB((v) => v - 1),
  };
};

export default function StoreContextProvider({ children }) {
  return (
   <Context.Provider value={useStore()}>
      {children}
   </Context.Provider>
  )
}

export const useStoreContext = () => useContext(Context);