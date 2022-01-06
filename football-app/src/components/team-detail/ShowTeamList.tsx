import { useContext } from "react";
import { Link } from "react-router-dom";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";

const ShowTeamList = () => {
  const { teams } = useContext(TeamContext) as TeamContextType;

  const showAllTeams = () => {
    return teams.map((team: ITeam, key: number) => {
      return (
        <div
          key={key}
          style={{
            border: "1px solid #3a043f",
            justifySelf: "center",
            borderRadius: "50%",
            width: 40,
            height: 40,
            margin: 13,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: "#FFF",
          }}
        >
          <Link
            to={`/team-info/${team.id!}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={`https://localhost:5001/images/image/${team?.image!}`}
              style={{
                borderRadius: "50%",

                height: 50,
              }}
              alt="teams-image"
            />
          </Link>
        </div>
      );
    });
  };

  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexFlow: "rowwrap",
        flexWrap: "nowrap",
        height: 80,
        overflowX: "scroll",
        overflowY: "hidden",
        alignItems: "center",
      }}
    >
      {showAllTeams()}
    </div>
  );
};

export default ShowTeamList;
