import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ITeam } from "../../interfaces/Interfaces";

const TeamItem: FC<ITeam> = ({ id, name, image, est, city, country }) => {
  return (
    <div>
      <Link to={`/team-info/${id}`} style={{ textDecoration: "none" }}>
        <Card
          className="m-2"
          style={{ border: "5px solid #3a043f", borderRadius: 15 }}
        >
          <Card.Body className="p-0">
            <Card.Img
              src={`https://localhost:5001/images/image/${image}`}
              height="250px"
              className="py-2"
            />
            <div className=" w-100 p-2" style={{ backgroundColor: "#3a043f" }}>
              <Card.Title className="text-center" style={{ color: "#fff" }}>
                {name}
              </Card.Title>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default TeamItem;
