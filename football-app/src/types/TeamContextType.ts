import { ITeam } from "../interfaces/Interfaces";

export type TeamContextType = {
    teams: ITeam[]
    getTeamById: (id: string) => ITeam
}