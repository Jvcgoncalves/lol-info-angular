import { Component, Input, OnInit } from '@angular/core';
import { Passive, Spell } from '../../../interface/champion-data';

@Component({
  selector: 'app-champ-abilities',
  standalone: true,
  imports: [],
  templateUrl: './champ-abilities.component.html',
  styleUrl: './champ-abilities.component.scss'
})
export class ChampAbilitiesComponent {
  baseUrlToGetPassiveImage: string = "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/" // + /id + _Passive.png
  baseUrlToGetSpellImage: string = "https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/" // + /id + SPELL.png (Q, w, E or R) 
  @Input() spell!: Spell;
  @Input() isPassive!: boolean;
  @Input() passive!: Passive;

  formatImageUrl(){
    if( this.isPassive ) return `${this.baseUrlToGetPassiveImage}${this.passive.image.full}`
    return `${this.baseUrlToGetSpellImage}${this.spell.image.full}`
  }
}
