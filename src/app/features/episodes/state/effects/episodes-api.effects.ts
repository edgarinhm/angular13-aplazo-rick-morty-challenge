import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodesApiActions, EpisodesPageActions } from '../actions';

@Injectable()
export class EpisodesApiEffects {
  constructor(
    private episodesService: EpisodesService,
    private actions$: Actions
  ) {}

  loadLocations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EpisodesPageActions.enter),
      exhaustMap(() => {
        return this.episodesService
          .findEpisodes()
          .pipe(
            map(({ results }) =>
              EpisodesApiActions.episodesLoaded({ episodes: results })
            )
          );
      })
    );
  });
}
