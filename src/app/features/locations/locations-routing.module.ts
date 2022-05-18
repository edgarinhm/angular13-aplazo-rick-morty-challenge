import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { CharactersListComponent } from '../characters/components/characters-list/characters-list.component';

const rutas: Routes = [
  {
    path: '',
    component: LocationsListComponent,
  },
  {
    path: 'residents',
    component: CharactersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
