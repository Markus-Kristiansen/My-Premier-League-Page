import axios from "axios";
import { ITeam } from "../interfaces/Interfaces";


export const teamService = (function(){

    const urlToTeamController = "https://localhost:5001/team";
    const urlToTeamImageUploadController = "https://localhost:5001/TeamImageUpload/SaveImage"

    const getAllTeams = async () => {
        const res = await axios.get(urlToTeamController);
        return res.data as ITeam[];
    }

    const postTeam = ( newTeam: ITeam, image: File ) => {
        let formData = new FormData();
        formData.append( "file", image );
        axios.post( urlToTeamController, newTeam );
        axios({
            url: urlToTeamImageUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    }
        
        const updateTeamById = (id:string, newTeam: ITeam, image: File) => {
            let formData = new FormData();
            formData.append( "file", image );
            axios.put(`https://localhost:5001/team/${id}`, newTeam)
            axios({
                url: urlToTeamImageUploadController,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            })
        }

        const deleteTeamById = (id: string) => {
            axios.delete(`https://localhost:5001/team/${id}`);
        };

    return { getAllTeams, postTeam, updateTeamById, deleteTeamById }


}())