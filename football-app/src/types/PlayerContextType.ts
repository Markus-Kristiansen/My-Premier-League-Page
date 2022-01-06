import { IPlayer } from "../interfaces/Interfaces";

export type PlayerContextType = {
    players: IPlayer[]
    getPlayerById: (id: string) => IPlayer
}
