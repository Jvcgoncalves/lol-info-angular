import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ChampionService } from '../../services/champion.service';
import { ChampionBlockComponent } from '../../components/home/champion-block/champion-block.component';
import { ChampionData } from '../../interface/champion-data';
import { LoaderComponent } from '../../components/home/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, ChampionBlockComponent, LoaderComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  allChampions!: ChampionData[];
  championsToShow!: ChampionData[];

  constructor(private champsService: ChampionService) { }

  ngOnInit(): void {
    this.champsService.getAllChamps().then(res =>{
      console.log(res);
      this.allChampions = res
      this.championsToShow = this.allChampions
    }).catch(err=>{
      console.log(err);
    })
  }
}
