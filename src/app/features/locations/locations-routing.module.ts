import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

const rutas: Routes = [
  {
    path: '',
    component: LocationsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
