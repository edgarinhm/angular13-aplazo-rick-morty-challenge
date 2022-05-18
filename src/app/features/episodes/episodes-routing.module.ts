import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { CharactersListComponent } from '../characters/components/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesListComponent,
  },
  {
    path: 'residents',
    component: CharactersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutesModule {}
