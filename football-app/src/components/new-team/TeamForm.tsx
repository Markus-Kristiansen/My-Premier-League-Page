import React, { ChangeEvent, useState } from "react";
import { ITeam } from "../../interfaces/Interfaces";
import { teamService } from "../../services/teamService";

const TeamForm = () => {
  const [newTeam, setNewTeam] = useState<ITeam>({
    name: "",
    image: "",
    est: 0,
    country: "",
    city: "",
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    let { name } = event.target;
    switch (name) {
      case "name":
        let name = event.target.value;
        setNewTeam({ ...newTeam, name: name });
        break;
      case "est":
        let est = event.target.value;
        setNewTeam({ ...newTeam, est: parseInt(est) });
        break;
      case "country":
        let country = event.target.value;
        setNewTeam({ ...newTeam, country: country });
        break;
      case "city":
        let city = event.target.value;
        setNewTeam({ ...newTeam, city: city });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          console.log(files[0]);
          setNewTeam({ ...newTeam, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
    }
  };

  const postNewTeam = () => {
    console.log(newTeam);
    console.log(newImage);
    teamService.postTeam(newTeam, newImage as File);
  };

  return (
    <div style={{ margin: 100 }} className="container-flex border border-dark">
      <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 15 }}>
        Player Form
      </h3>
      <form onSubmit={postNewTeam}>
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
              name="est"
              type="number"
              min="1880"
              style={{ width: 300 }}
              placeholder="Established 1892..."
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
              name="country"
              type="text"
              style={{ width: 300 }}
              placeholder="Country"
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
              name="city"
              type="text"
              style={{ width: 300 }}
              placeholder="City"
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

export default TeamForm;
