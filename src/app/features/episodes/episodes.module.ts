import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EpisodesRoutesModule } from './episodes-routing.module';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EffectsModule } from '@ngrx/effects';
import { EpisodesApiEffects } from './state/effects/episodes-api.effects';
import { SharedStateEpisodesModule } from './state/store/episodes.store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EpisodesRoutesModule,
    EffectsModule.forFeature([EpisodesApiEffects]),
    SharedStateEpisodesModule,
  ],
  declarations: [EpisodesListComponent],
  exports: [EpisodesListComponent],
})
export class EpisodesModule {}
