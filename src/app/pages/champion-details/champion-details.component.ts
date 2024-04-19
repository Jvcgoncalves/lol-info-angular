import { Component, EventEmitter, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ChampionService } from '../../services/champion.service';
import { ActivatedRoute } from '@angular/router';
import { ChampExtraInfo, SingleChampionData, Spell } from '../../interface/champion-data';
import { LoaderComponent } from '../../components/home/loader/loader.component';
import { CommonModule } from '@angular/common';
import { ChampAbilitiesComponent } from '../../components/champ-details/champ-abilities/champ-abilities.component';

@Component({
  selector: 'app-champion-details',
  standalone: true,
  imports: [HeaderComponent,LoaderComponent,CommonModule, ChampAbilitiesComponent],
  templateUrl: './champion-details.component.html',
  styleUrl: './champion-details.component.scss'
})
export class ChampionDetailsComponent implements OnInit {
  champData!: SingleChampionData
  extraDataInfoArray!: ChampExtraInfo[];

  constructor(private championsService: ChampionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const champId = this.activatedRoute.snapshot.params['champId']
    this.championsService.getSingleChamp(champId)
    .then((res) =>{
      this.champData = res  
      
      
      this.champData.spells.forEach((currentSpell: Spell,index : number) => {
        currentSpell.whichIs = this.formatSpells(index)
      })
    })
    .catch(err => err)
  }

  formatChampionImage(champId: string){
    return `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${champId}.png`
  }

  formatSpells(index: number): string{
    switch(index){
      case 0:
        return "Spell Q"
      case 1:
        return "Spell W"
      case 2:
        return "Spell E"
      case 3:
        return "Spell R"
      default:
        return "not identified spell"
    }
  }

  setExtraDataInfoArray(){
    this.extraDataInfoArray.push()
  }
}
