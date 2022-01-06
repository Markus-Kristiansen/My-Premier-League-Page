import React, { useContext } from "react";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";

const TeamDataList = () => {
  const { teams } = useContext(TeamContext) as TeamContextType;

  const createDataList = () => {
    return teams.map((team: ITeam, key: number) => {
      return (
        <div key={key}>
          <option value={team.name} />
        </div>
      );
    });
  };

  return (
    <datalist id="teams" style={{ maxHeight: 100, overflowY: "auto" }}>
      {createDataList()}
    </datalist>
  );
};

export default TeamDataList;
