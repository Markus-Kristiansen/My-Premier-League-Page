import { ChangeEvent, FC, useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";
import SearchBar from "../reusable/SearchBar";
import TeamItem from "./TeamItem";

const TeamList: FC = () => {
  const { teams } = useContext(TeamContext) as TeamContextType;
  const [string, setString] = useState<any>("");

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setString(value);
  };

  const searchTeams = () => {
    return teams.map((data: ITeam, key: number) => {
      if (data.name.toLowerCase().includes(string.toLowerCase())) {
        return (
          <Col md={6} lg={4} xl={3} key={key}>
            <TeamItem
              id={data.id}
              name={data.name}
              image={data.image}
              est={data.est}
              city={data.city}
              country={data.country}
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
        <Link to="/new-team" style={{ textDecoration: "none" }}>
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
      {searchTeams()}
    </Row>
  );
};

export default TeamList;
