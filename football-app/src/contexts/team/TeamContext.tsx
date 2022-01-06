import { createContext, FC, useEffect, useState } from "react";
import { ITeam } from "../../interfaces/Interfaces";
import { teamService } from "../../services/teamService";
import { TeamContextType } from "../../types/TeamContextType";

export const TeamContext = createContext<TeamContextType | null>(null);

export const TeamProvider: FC = ({ children }) => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    getAllTeams();
  }, [teams]);

  const getAllTeams = async () => {
    const res = await teamService.getAllTeams();
    setTeams(res);
  };

  const getTeamById = (id: string) => {
    return teams.find((team) => team.id === id) as ITeam;
  };

  return (
    <TeamContext.Provider value={{ teams, getTeamById }}>
      {children}
    </TeamContext.Provider>
  );
};
