import { Component, Input, OnInit } from '@angular/core';
import { ChampExtraInfo } from '../../../interface/champion-data';

@Component({
  selector: 'app-champ-extra-info',
  standalone: true,
  imports: [],
  templateUrl: './champ-extra-info.component.html',
  styleUrl: './champ-extra-info.component.scss'
})
export class ChampExtraInfoComponent implements OnInit {
  @Input() extraInfoData!: ChampExtraInfo;

  constructor()  { }

  ngOnInit(): void {
      if(Array.isArray(this.extraInfoData.content)){
        this.extraInfoData.content = this.extraInfoData.content.reduce((finalValue: string, currentValue: string, index: number)=>{
          finalValue += `${index+1} - ${currentValue} \n`
          return finalValue
        }, "")
        
      }
  }

  toggleChampExtraInfo(event: Event){
    const elementThathCalledEvent = event.target as HTMLElement
    if(elementThathCalledEvent.parentElement?.classList.contains("champ-extra-info")){
      elementThathCalledEvent.parentElement.classList.toggle("active")
    }
    
    elementThathCalledEvent.classList.toggle("active")
  }
}
