import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { TeamContext } from "../../contexts/team/TeamContext";
import { IPlayer, ITeam } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";
import { TeamContextType } from "../../types/TeamContextType";

export type Props = {
  id?: string;
};

const ShowPlayerList: FC<Props> = ({ id }) => {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const { teams } = useContext(TeamContext) as TeamContextType;

  const showPlayerList = (id: string) => {
    return players.map((player: IPlayer, key: number) => {
      return teams.map((team: ITeam) => {
        if (player.team === team.name && team.id === id) {
          return (
            <div
              key={key}
              className="col-xs-6 col-sm-3 col-md-2 col-lg-2"
              style={{
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  height: 222,
                  borderRadius: 15,
                  display: "flex",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Link
                  to={`/player-info/${player.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={`https://localhost:5001/images/image/${player.image}`}
                    alt="player"
                    width="200"
                    style={{
                      backgroundColor: "#FFF",
                    }}
                  />
                  <div style={{ height: 15 }}>
                    <p
                      style={{
                        backgroundColor: "#fff",
                        color: "black",
                        whiteSpace: "nowrap",
                        fontSize: 14,
                        fontWeight: "bold",
                        textAlign: "center",
                        borderTop: "1px solid black",
                      }}
                    >
                      {player.name}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        }
      });
    });
  };

  return <> {showPlayerList(id!)}</>;
};

export default ShowPlayerList;
