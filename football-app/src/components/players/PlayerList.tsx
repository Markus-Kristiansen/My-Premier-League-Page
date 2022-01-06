import React, { ChangeEvent, FC, useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";
import SearchBar from "../reusable/SearchBar";
import PlayerItem from "./PlayerItem";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const [string, setString] = useState<string>("");

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setString(value);
  };

  const searchPlayers = () => {
    return players.map((data: IPlayer, key: number) => {
      if (
        data.name.toLowerCase().includes(string.toLowerCase()) ||
        data.team.toLowerCase().includes(string.toLowerCase())
      ) {
        return (
          <Col md={6} lg={4} xl={3} key={key}>
            <PlayerItem
              id={data.id}
              name={data.name}
              image={data.image}
              team={data.team}
              age={data.age}
              nationality={data.nationality}
              teamIcon={data.teamIcon}
            />
          </Col>
        );
      }
    });
  };

  return (
    <Row style={{ backgroundColor: "#f5f5f5" }}>
      <div style={{ display: "flex", marginBottom: 20 }}>
        <SearchBar search={search} placeholder="player" />
        <Link to="/new-player" style={{ textDecoration: "none" }}>
          <div
            style={{
              backgroundColor: "#3a043f",
              color: "white",
              width: 50,
              height: 50,
              fontSize: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              marginRight: 10,
              marginTop: 10,
              borderRadius: 15,
              textAlign: "center",
            }}
          >
            +
          </div>
        </Link>
      </div>
      {searchPlayers()}
    </Row>
  );
};

export default PlayerList;
