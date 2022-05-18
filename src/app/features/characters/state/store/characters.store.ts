import { NgModule } from '@angular/core';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { fromCharactersReducers } from '../reducer';

export const FEATURE_KEY = 'shared-characters';

export interface State {
  characters: fromCharactersReducers.State;
}

export const reducers: ActionReducerMap<State> = {
  characters: fromCharactersReducers.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers, { metaReducers })],
})
export class SharedStateCharactersModule {}

export const selectSharedCharactersState =
  createFeatureSelector<State>(FEATURE_KEY);

export const selectCharactersState = createSelector(
  selectSharedCharactersState,
  (sharedCharactersFeactureState) => sharedCharactersFeactureState.characters
);

export const selectAllCharacters = createSelector(
  selectCharactersState,
  fromCharactersReducers.selectAll
);

export const selectActiveCharacter = createSelector(
  selectCharactersState,
  fromCharactersReducers.selectActiveCharacter
);

export const selectAllResidents = createSelector(
  selectCharactersState,
  fromCharactersReducers.selectResidents
);
