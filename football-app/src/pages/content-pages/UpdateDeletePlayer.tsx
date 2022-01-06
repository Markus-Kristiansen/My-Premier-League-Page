import React, { ChangeEvent, useState } from "react";
import { useParams } from "react-router";
import TeamDataList from "../../components/new-player/TeamDataList";
import TeamIconDataList from "../../components/new-player/TeamIconDataList";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";

const UpdateDeletePlayer = () => {
  const { id } = useParams();

  const [newPlayer, setNewPlayer] = useState<IPlayer>({
    id: id,
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
    event.preventDefault();
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

  const updatePlayer = () => {
    console.log(newPlayer);
    console.log(newImage);
    playerService.updatePlayerById(id!, newPlayer, newImage as File);
  };

  const deletePlayer = () => {
    playerService.deletePlayerById(id!);
  };

  const InputStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  };

  return (
    <div style={{ margin: 100 }} className="container-flex border border-dark">
      <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 15 }}>
        Delete Or Update Player
      </h3>
      <form onSubmit={updatePlayer}>
        <div className="row">
          <div style={InputStyle} className="col-12">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              style={{ width: 300 }}
              placeholder="Name"
            />
          </div>
          <div style={InputStyle} className="col-12">
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
          <div style={InputStyle} className="col-12">
            <input
              onChange={handleChange}
              name="team"
              type="text"
              list="teams"
              style={{ width: 300 }}
              placeholder="Team"
            />
            <TeamDataList />
          </div>
          <div style={InputStyle} className="col-12">
            <input
              onChange={handleChange}
              name="teamIcon"
              type="text"
              list="teamIcons"
              style={{ width: 300 }}
              placeholder="Team Icon"
            />
            <TeamIconDataList />
          </div>
          <div style={InputStyle} className="col-12">
            <input
              onChange={handleChange}
              name="nationality"
              type="text"
              style={{ width: 300 }}
              placeholder="Nationality"
            />
          </div>
          <div style={InputStyle} className="col-12">
            <textarea
              onChange={handleChange}
              name="biography"
              style={{ width: 300 }}
              placeholder="Biography"
            />
          </div>
          <div style={InputStyle} className="col-12">
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              marginTop: 35,
              marginBottom: 15,
              borderRadius: 15,
              marginRight: 30,
              borderColor: "#3a043f",
              backgroundColor: "#3a043f",
              color: "#fff",
              width: 70,
            }}
            type="submit"
          >
            Save
          </button>
          <button
            style={{
              marginTop: 35,
              marginLeft: 30,
              marginBottom: 15,
              borderRadius: 15,
              borderColor: "#3a043f",
              backgroundColor: "#3a043f",
              color: "#fff",
              width: 70,
            }}
            onClick={() => {
              if (window.confirm("Are you sure you want to delete player")) {
                deletePlayer();
              }
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDeletePlayer;
