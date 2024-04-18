import { Injectable } from '@angular/core';
import { ApiReturnData, ChampionData } from '../interface/champion-data';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  url: string = "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json";

  constructor() { }

  getAllChamps = async (): Promise<ChampionData[]> => {
    const response = await fetch(this.url).then((res) => {
      return res.json()
    })
    .then((r): ChampionData[] => Object.values(r.data))
    .catch(error =>{
      console.log(error);
    })
    console.log(response);
    return response!
  }
}
