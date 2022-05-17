import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { fromEpisodesReducers } from '../reducer';

export const FEATURE_KEY = 'shared-episodes';

export interface State {
  Episodes: fromEpisodesReducers.State;
}

export const reducers: ActionReducerMap<State> = {
  Episodes: fromEpisodesReducers.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateEpisodesModule {}

export const selectSharedEpisodesState =
  createFeatureSelector<State>(FEATURE_KEY);

export const selectEpisodesState = createSelector(
  selectSharedEpisodesState,
  (sharedEpisodesFeactureState) => sharedEpisodesFeactureState.Episodes
);

export const selectAllEpisodes = createSelector(
  selectEpisodesState,
  fromEpisodesReducers.selectAll
);

export const selectActiveEpisode = createSelector(
  selectEpisodesState,
  fromEpisodesReducers.selectActiveEpisode
);
