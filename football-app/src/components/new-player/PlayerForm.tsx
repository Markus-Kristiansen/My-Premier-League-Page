import React, { ChangeEvent, useState } from "react";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import TeamDataList from "./TeamDataList";
import TeamIconDataList from "./TeamIconDataList";

const PlayerForm = () => {
  const [newPlayer, setNewPlayer] = useState<IPlayer>({
    name: "",
    image: "",
    team: "",
    teamIcon: "",
    age: 0,
    nationality: "",
    biography: "",
  });
  const [newImage, setNewImage] = useState<File>();
  const [newBiography, setNewBiography] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    let { name } = event.target;
    switch (name) {
      case "name":
        let name = event.target.value;
        setNewPlayer({ ...newPlayer, name: name });
        break;
      case "age":
        let age = event.target.value;
        setNewPlayer({ ...newPlayer, age: parseInt(age) });
        break;
      case "team":
        let team = event.target.value;
        setNewPlayer({ ...newPlayer, team: team });
        break;
      case "teamIcon":
        let teamIcon = event.target.value;
        setNewPlayer({ ...newPlayer, teamIcon: teamIcon });
        break;
      case "nationality":
        let nationality = event.target.value;
        setNewPlayer({ ...newPlayer, nationality: nationality });
        break;
      case "biography":
        let biography = event.target.value;
        setNewBiography(biography);
        setNewPlayer({ ...newPlayer, biography: newBiography });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          console.log(files[0]);
          setNewPlayer({ ...newPlayer, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
    }
  };

  const postNewPlayer = () => {
    console.log(newPlayer);
    console.log(newImage);
    playerService.postPlayer(newPlayer, newImage as File);
  };

  return (
    <div style={{ margin: 100 }} className="container-flex border border-dark">
      <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 15 }}>
        Player Form
      </h3>
      <form onSubmit={postNewPlayer}>
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <input
              onChange={handleChange}
              name="name"
              type="text"
              style={{ width: 300 }}
              placeholder="Name"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <input
              onChange={handleChange}
              name="age"
              type="number"
              style={{ width: 300 }}
              placeholder="Age"
              max="50"
              min="15"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <input
              onChange={handleChange}
              name="team"
              type="text"
              list="teams"
              style={{ width: 300 }}
              placeholder="Team"
              onKeyDown={(e) => e.preventDefault()}
            />
            <TeamDataList />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <input
              onChange={handleChange}
              name="teamIcon"
              type="text"
              list="teamIcons"
              style={{ width: 300 }}
              placeholder="Team Icon"
              onKeyDown={(e) => e.preventDefault()}
            />
            <TeamIconDataList />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <input
              onChange={handleChange}
              name="nationality"
              type="text"
              style={{ width: 300 }}
              placeholder="Nationality"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <textarea
              onChange={handleChange}
              name="biography"
              style={{ width: 300 }}
              placeholder="Biography"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
              marginBottom: 5,
            }}
            className="col-12"
          >
            <input
              onChange={handleChange}
              name="image"
              type="file"
              style={{ width: 300 }}
              placeholder="Age"
              max="50"
              min="15"
            />
          </div>
        </div>
        <button
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 35,
            marginBottom: 15,
            borderRadius: 15,
            borderColor: "#3a043f",
            backgroundColor: "#3a043f",
            color: "#fff",
            width: 70,
          }}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
