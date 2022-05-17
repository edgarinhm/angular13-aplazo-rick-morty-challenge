import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { fromLocationsReducers } from '../reducer';

export const FEATURE_KEY = 'shared-locations';

export interface State {
  locations: fromLocationsReducers.State;
}

export const reducers: ActionReducerMap<State> = {
  locations: fromLocationsReducers.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateLocationsModule {}

export const selectSharedLocationsState =
  createFeatureSelector<State>(FEATURE_KEY);

export const selectLocationsState = createSelector(
  selectSharedLocationsState,
  (sharedLocationsFeactureState) => sharedLocationsFeactureState.locations
);

export const selectAllLocations = createSelector(
  selectLocationsState,
  fromLocationsReducers.selectAll
);

export const selectActiveLocation = createSelector(
  selectLocationsState,
  fromLocationsReducers.selectActiveLocation
);
