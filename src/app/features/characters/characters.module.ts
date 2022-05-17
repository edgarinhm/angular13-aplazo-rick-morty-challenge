import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { SharedStateCharactersModule } from './state/store/characters.store';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { EffectsModule } from '@ngrx/effects';
import { CharactersApiEffects } from './state/effects/character-api.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
    EffectsModule.forFeature([CharactersApiEffects]),
    SharedStateCharactersModule,
  ],
  declarations: [CharactersListComponent, CharactersDetailsComponent],
  exports: [CharactersListComponent, CharactersDetailsComponent],
})
export class CharactersModule {}
