import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EffectsModule } from '@ngrx/effects';
import { SharedStateSearchModule } from './components/state/store/search.store';
import { SearchApiEffects } from './components/state/effects/search-api.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([SearchApiEffects]),
    SharedStateSearchModule,
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchModule {}
