import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ShowPlayerList from "../../components/team-detail/ShowPlayerList";
import ShowTeamList from "../../components/team-detail/ShowTeamList";
import TeamImage from "../../components/team-detail/TeamImage";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";
import SettingsIcon from "@mui/icons-material/Settings";

const TeamDetail = () => {
  const { id } = useParams();

  const { getTeamById } = useContext(TeamContext) as TeamContextType;

  const [team, setTeam] = useState<ITeam>();

  useEffect(() => {
    if (id) {
      const _team = getTeamById(id);
      setTeam(_team);
    }
    console.log(team);
  });

  return (
    <div className="container">
      <div className="row " style={{ height: 300 }}>
        <div
          className="d-sm-none"
          style={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "end",
            padding: 5,
          }}
        >
          <Link to={`update-delete-team/${team?.id}`}>
            <SettingsIcon
              className="d-block d-sm-none"
              style={{
                color: "#3a043f",
                display: "inline-block",
              }}
            />
          </Link>
        </div>
        <div
          className="d-xs-none"
          style={{
            padding: 5,

            display: "flex",
            justifyContent: "end",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Link to={`/update-delete-team/${team?.id}`}>
            <SettingsIcon
              className="d-none d-sm-block"
              style={{
                color: "#3a043f",
                display: "inline-block",
              }}
            />
          </Link>
        </div>
        <div
          className="col-xs-12 col-sm-4 col-md-4 col-lg-4 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            backgroundColor: "#f5f5f5",
          }}
        >
          <TeamImage image={team?.image} />
        </div>

        <div
          style={{ height: 300, backgroundColor: "#cfc7db", overflowY: "auto" }}
          className="col-xs-12 col-sm-8 col-md-8 col-lg-8"
        >
          <p>{team?.biography}</p>
        </div>
      </div>
      <div>
        <div
          className="row"
          style={{
            display: "flex",
            marginTop: 30,
            height: 250,
            overflowY: "auto",
            backgroundColor: "#3a043f",
          }}
        >
          <ShowPlayerList id={team?.id!} />
        </div>
      </div>
      <ShowTeamList />
    </div>
  );
};

export default TeamDetail;
