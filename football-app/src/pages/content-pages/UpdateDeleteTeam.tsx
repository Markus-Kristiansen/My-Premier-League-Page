import React, { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { ITeam } from "../../interfaces/Interfaces";
import { teamService } from "../../services/teamService";

const UpdateDeleteTeam = () => {
  const { id } = useParams();

  const [newTeam, setNewTeam] = useState<ITeam>({
    id: id,
    name: "",
    image: "",
    est: 0,
    city: "",
    country: "",
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
        setNewTeam({ ...newTeam, name: name });
        break;
      case "est":
        let est = event.target.value;
        setNewTeam({ ...newTeam, est: parseInt(est) });
        break;
      case "city":
        let city = event.target.value;
        setNewTeam({ ...newTeam, city: city });
        break;
      case "country":
        let country = event.target.value;
        setNewTeam({ ...newTeam, country: country });
        break;
      case "biography":
        let biography = event.target.value;
        setNewBiography(biography);
        setNewTeam({ ...newTeam, biography: newBiography });
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

  const updateTeam = () => {
    console.log(newTeam);
    console.log(newImage);
    teamService.updateTeamById(id!, newTeam, newImage as File);
  };

  const deleteTeam = () => {
    teamService.deleteTeamById(id!);
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
        Delete Or Update Team
      </h3>
      <form onSubmit={updateTeam}>
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
              name="est"
              type="number"
              style={{ width: 300 }}
              min="1880"
              placeholder="Established 1890..."
            />
          </div>
          <div style={InputStyle} className="col-12">
            <input
              onChange={handleChange}
              name="country"
              type="text"
              style={{ width: 300 }}
              placeholder="Country"
            />
          </div>
          <div style={InputStyle} className="col-12">
            <input
              onChange={handleChange}
              name="city"
              type="text"
              style={{ width: 300 }}
              placeholder="City"
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
              if (window.confirm("Are you sure you want to delete team")) {
                deleteTeam();
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

export default UpdateDeleteTeam;
