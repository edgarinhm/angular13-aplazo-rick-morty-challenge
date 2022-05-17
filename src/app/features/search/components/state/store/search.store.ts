import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { fromSearchReducers } from '../reducer';

export const FEATURE_KEY = 'shared-search';

export interface State {
  searchCollection: fromSearchReducers.State;
}

export const reducers: ActionReducerMap<State> = {
  searchCollection: fromSearchReducers.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateSearchModule {}

export const selectSharedSearchState =
  createFeatureSelector<State>(FEATURE_KEY);

export const selectSearchState = createSelector(
  selectSharedSearchState,
  (sharedSearchFeactureState) => sharedSearchFeactureState.searchCollection
);

export const selectActiveCollection = createSelector(
  selectSearchState,
  fromSearchReducers.selectActiveCollection
);

export const selectSearchCollection = createSelector(
  selectSearchState,
  fromSearchReducers.selectSearchCollection
);
