import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChampionData } from '../../../interface/champion-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-champion-block',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './champion-block.component.html',
  styleUrl: './champion-block.component.scss'
})
export class ChampionBlockComponent {
  @Input() championsToShow!: ChampionData[];
  @Input() renderLimit!: number;

  constructor() { }

  formatChampionImage(champId: string){
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg`
  }

  expandChampionsArray(){
    this.renderLimit += 15
  }
}
