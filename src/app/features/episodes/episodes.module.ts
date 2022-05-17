import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EpisodesRoutesModule } from './episodes-routing.module';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, EpisodesRoutesModule],
  declarations: [EpisodesListComponent],
  exports: [EpisodesListComponent],
})
export class EpisodesModule {}
