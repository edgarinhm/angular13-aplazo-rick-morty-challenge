import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { LocationsService } from '../../services/locations.service';
import { LocationsApiActions, LocationsPageActions } from '../actions';

@Injectable()
export class LocationsApiEffects {
  constructor(
    private locationsService: LocationsService,
    private actions$: Actions
  ) {}

  loadLocations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LocationsPageActions.enter),
      exhaustMap(() => {
        return this.locationsService
          .findLocations()
          .pipe(
            map(({ results }) =>
              LocationsApiActions.locationsLoaded({ locations: results })
            )
          );
      })
    );
  });
}
