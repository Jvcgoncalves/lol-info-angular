import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChampionData } from '../../interface/champion-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchChampionsForm: FormGroup = new FormGroup({
    typedSearch: new FormControl([""])
  })
  @Input() allChampionsArray!: ChampionData[];
  @Output() searchChampionsByTypeResponse = new EventEmitter();

  constructor() { }

  handleSubmit(){

  }

  typingSearch(event: Event): ChampionData[]{
    const typedData = event.target as HTMLInputElement
    console.log(typedData.value);
    
    return []
  }
  
}
