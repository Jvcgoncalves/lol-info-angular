import { Component, Input } from '@angular/core';
import { ChampExtraInfo } from '../../../interface/champion-data';

@Component({
  selector: 'app-champ-extra-info',
  standalone: true,
  imports: [],
  templateUrl: './champ-extra-info.component.html',
  styleUrl: './champ-extra-info.component.scss'
})
export class ChampExtraInfoComponent {
  @Input() extraInfoData!: ChampExtraInfo;
}
