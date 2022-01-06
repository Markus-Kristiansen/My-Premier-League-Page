import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IPlayer } from "../../interfaces/Interfaces";

const PlayerItem: FC<IPlayer> = ({
  id,
  age,
  name,
  image,
  team,
  nationality,
  teamIcon,
}) => {
  return (
    <div>
      <Link to={`/player-info/${id}`} style={{ textDecoration: "none" }}>
        <Card
          className="m-2"
          style={{ border: "5px solid #3a043f", borderRadius: 15 }}
        >
          <Card.Body className="p-0">
            <Card.Img src={`https://localhost:5001/images/image/${image}`} />
            <div className="w-100 p-2" style={{ backgroundColor: "#3a043f" }}>
              <Card.Title className="text-center text-light">{name}</Card.Title>
              <Card.Text className="text-light">Age: {age}</Card.Text>
              <Card.Text className="text-light">Team: {team}</Card.Text>
              <img
                src={`https://localhost:5001/images/image/${teamIcon}`}
                height="20"
              />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default PlayerItem;
