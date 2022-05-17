import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { SearchService } from '../../../services/search.service';
import { SearchPageActions } from '../actions';

@Injectable()
export class SearchApiEffects {
  constructor(
    private searchService: SearchService,
    private actions$: Actions
  ) {}
}
