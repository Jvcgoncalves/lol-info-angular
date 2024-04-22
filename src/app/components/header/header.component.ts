import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
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
  champsFoundBySearch!: ChampionData[];
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('searchResultsDiv') searchResultsDiv !: ElementRef;
  constructor() { }

  typingSearch(event: Event){
    const typedData = event.target as HTMLInputElement

    const typedTextFormated = typedData.value.trim().toLowerCase();

    this.searchChamp({typedTextFormated})
  }

  toggleSearchInput(): void{
    if(window.innerWidth === 576) return;
    this.searchInput.nativeElement.classList.toggle("active") 
  }

  showSearchResults(){
    if(!document.querySelector(".search-results.hide")) return
    this.searchResultsDiv.nativeElement?.classList.toggle('hide')
  }

  hideSearchResults(){
    setTimeout(()=>{
      if(document.querySelector(".search-results.hide")) return
      if(document.activeElement?.className.includes("result row")) return
      this.searchResultsDiv.nativeElement?.classList.toggle('hide')
    },150)
  }

  formatChampionImage(champId: string){
    return `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${champId}.png`
  }

  clickOnChampOfSearchResult(ev: Event){
    const currentElement = ev.target as HTMLElement
    this.searchInput.nativeElement.innerText = "a"
    if(currentElement.parentElement?.className.includes("result row")){
      this.searchInput.nativeElement.value = currentElement.parentElement?.getAttribute("data-champ") ?? ""
      this.searchChampionsForm.value.typedSearch = this.searchInput.nativeElement.value
    } else if(currentElement.className.includes("result row")){
      this.searchInput.nativeElement.value = currentElement.getAttribute("data-champ") ?? ""
      this.searchChampionsForm.value.typedSearch = this.searchInput.nativeElement.value
    }
    this.searchChamp({typedTextFormated: this.searchChampionsForm.value.typedSearch.trim().toLowerCase()})
  }

  searchChamp({typedTextFormated}: {typedTextFormated: string}): void{
    this.champsFoundBySearch = this.allChampionsArray.filter(champ => champ.id.toLowerCase().match(`^${typedTextFormated}`) || champ.name.toLowerCase().match(`^${typedTextFormated}`))

    this.searchChampionsByTypeResponse.emit({
      championsMatched: this.champsFoundBySearch
    })

    if(this.searchInput.nativeElement.value === ''){
      this.champsFoundBySearch = []
    }
  }
}
