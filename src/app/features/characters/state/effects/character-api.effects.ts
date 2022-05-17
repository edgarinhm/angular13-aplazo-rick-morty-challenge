import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { CharactersService } from '../../services/characters.service';
import { CharactersApiActions, CharactersPageActions } from '../actions';

@Injectable()
export class CharactersApiEffects {
  constructor(
    private charactersService: CharactersService,
    private actions$: Actions
  ) {}

  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharactersPageActions.enter),
      exhaustMap(() => {
        return this.charactersService
          .findCharacters()
          .pipe(
            map(({ results }) =>
              CharactersApiActions.charactersLoaded({ characters: results })
            )
          );
      })
    );
  });
}
