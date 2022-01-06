import React, { FC } from "react";

export type Props = {
  image: string;
  teamIcon: string;
  team: string;
  age: number;
  nationality: string;
  name: string;
};

const PlayerInfoBox: FC<Props> = ({
  image,
  teamIcon,
  team,
  age,
  nationality,
  name,
}) => {
  return (
    <>
      <div
        className="border border-bottom-0"
        style={{
          backgroundColor: "#f5f5f5",
          backgroundImage: `url(https://localhost:5001/images/image/${teamIcon})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={`https://localhost:5001/images/image/${image}`}
          alt={`${name}`}
          height="200px"
        />
      </div>
      <div
        className="border border-top-0"
        style={{ backgroundColor: "#F5F5F5", paddingLeft: 10 }}
      >
        <p>
          <b>Age:</b> {age}
          <br></br>
          <b>Born in:</b> {nationality}
        </p>

        <h3>Honours:</h3>
        <ul
          style={{
            listStyleImage: `url(https://localhost:5001/images/${teamIcon})`,
          }}
        >
          <li>Premier League</li>
          <li>Champions League</li>
          <li>Top Scorer Premier League</li>
          <li>Most Scoring African PL Player</li>
        </ul>
      </div>
    </>
  );
};

export default PlayerInfoBox;
