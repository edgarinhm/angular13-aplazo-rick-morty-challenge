import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'characters',
        loadChildren: () =>
          import('../characters/characters.module').then(
            (m) => m.CharactersModule
          ),
      },
      {
        path: 'locations',
        loadChildren: () =>
          import('../locations/locations.module').then(
            (m) => m.LocationsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
