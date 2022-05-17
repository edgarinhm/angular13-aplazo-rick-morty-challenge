import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutesModule {}
