import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";
import SettingsIcon from "@mui/icons-material/Settings";

import PlayerCarousel from "../../components/player-detail/PlayerCarousel";
import PlayerInfoBox from "../../components/player-detail/PlayerInfoBox";
import { Link } from "react-router-dom";

const PlayerDetail: FC = () => {
  const { id } = useParams();

  const [player, setPlayer] = useState<IPlayer>();
  const { getPlayerById } = useContext(PlayerContext) as PlayerContextType;

  useEffect(() => {
    if (id) {
      const _player = getPlayerById(id);
      setPlayer(_player);
    }
    console.log(player);
  });

  return (
    <div className="container" style={{ backgroundColor: "#E9ECF5" }}>
      <div className="row">
        <div
          className="d-sm-none"
          style={{ display: "flex", justifyContent: "end", padding: 5 }}
        >
          <Link to={`update-delete-player/${player?.id}`}>
            <SettingsIcon
              className="d-block d-sm-none"
              style={{
                color: "#3a043f",
                display: "inline-block",
              }}
            />
          </Link>
        </div>
        <div className="hidden-xs col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <PlayerInfoBox
            image={player?.image!}
            team={player?.team!}
            teamIcon={player?.teamIcon!}
            age={player?.age!}
            nationality={player?.nationality!}
            name={player?.name!}
          />
        </div>
        <div
          className="my-auto mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12"
          style={{ height: 320 }}
        >
          <div
            className="d-xs-none"
            style={{
              padding: 5,

              display: "flex",
              justifyContent: "end",
            }}
          >
            <Link to={`/update-delete-player/${player?.id}`}>
              <SettingsIcon
                className="d-none d-sm-block"
                style={{
                  color: "#3a043f",
                  display: "inline-block",
                }}
              />
            </Link>
          </div>
          <div style={{ marginTop: 20, height: 250, overflowY: "auto" }}>
            <h3
              style={{
                textAlign: "center",
                textDecoration: "underline",
                textDecorationColor: "gray",
              }}
            >
              {player?.name}
            </h3>
            <p style={{ padding: 10 }}>{player?.biography}</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: 100, backgroundColor: "white" }}>
        <div className="col"></div>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-lg-8 col-md-8 col-sm-8 col-xs-8"
          style={{ backgroundColor: "gray" }}
        >
          <PlayerCarousel team={player?.team!} id={player?.id!} />
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
