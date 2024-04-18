import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChampionDetailsComponent } from './pages/champion-details/champion-details.component';

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    title: "Lol Info Home Page",
  },
  {
    path: "champion/:champId",
    component: ChampionDetailsComponent,
  }
];
