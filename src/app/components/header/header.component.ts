import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChampionData } from '../../interface/champion-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchChampionsForm: FormGroup = new FormGroup({
    typedSearch: new FormControl([""])
  })
  @Input() currentPage!: string;

  @Input() allChampionsArray!: ChampionData[];
  @Output() searchChampionsByTypeResponse = new EventEmitter();

  constructor() { }

  handleSubmit(){

  }

  typingSearch(event: Event){
    const typedData = event.target as HTMLInputElement
    const typedTextFormated =typedData.value.trim().toLowerCase();
    
    this.searchChampionsByTypeResponse.emit({
      championsMatched: this.allChampionsArray.filter(champ => champ.id.toLowerCase().match(typedTextFormated))
    })
  }
}
