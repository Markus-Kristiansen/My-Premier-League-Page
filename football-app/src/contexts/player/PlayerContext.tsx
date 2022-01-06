import { createContext, FC, useEffect, useState } from "react";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    getAllPlayers();
  }, [players]);

  const getAllPlayers = async () => {
    const res = await playerService.getAllPlayers();
    setPlayers(res);
  };

  const getPlayerById = (id: string) => {
    return players.find((player) => player.id === id) as IPlayer;
  };

  // Everything that uses this context needs to be inside PlayerProvider.
  return (
    <PlayerContext.Provider value={{ players, getPlayerById }}>
      {children}
    </PlayerContext.Provider>
  );
};
