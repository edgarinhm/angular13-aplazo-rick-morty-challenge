import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';

const rutas: Routes = [
  {
    path: '',
    component: CharactersListComponent,
  },
  {
    path: 'details',
    component: CharactersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
