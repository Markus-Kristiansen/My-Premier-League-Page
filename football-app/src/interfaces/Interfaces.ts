
export interface IPlayer {
  id?: string;
  name: string;
  age?: number;
  image: string;
  nationality?: string;
  team: string;
  biography?: string;
  teamIcon?: string;
}


export interface ITeam {
  id?: string;
  name: string;
  est: number;
  image: string;
  country: string;
  city: string;
  biography?: string;
}
