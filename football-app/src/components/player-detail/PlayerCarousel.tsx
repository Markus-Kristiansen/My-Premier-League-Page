import React, { FC, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";

export type Props = {
  team: string;
  id: string;
};

const PlayerCarousel: FC<Props> = ({ team, id }) => {
  const { players } = useContext(PlayerContext) as PlayerContextType;

  const createPlayerCarousel = () => {
    return players.map((player: IPlayer, key: number) => {
      if (player.team === team && player.id !== id) {
        return (
          <Carousel.Item key={key}>
            <div
              style={{
                color: "#fff",
                fontWeight: "bold",
                WebkitTextStrokeWidth: 1,
                WebkitTextStrokeColor: "#000",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1 style={{ textAlign: "center" }}>{player.name}</h1>
            </div>
            <div>
              <Link to={`/player-info/${player.id}`}>
                <img
                  className="d-block w-50 mx-auto"
                  src={`https://localhost:5001/images/image/${player.image}`}
                />
              </Link>
            </div>
          </Carousel.Item>
        );
      }
    });
  };

  return <Carousel variant="dark">{createPlayerCarousel()}</Carousel>;
};

export default PlayerCarousel;
