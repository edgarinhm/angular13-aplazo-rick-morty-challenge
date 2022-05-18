import { createReducer, createSelector, on } from '@ngrx/store';
import { CharactersPageActions, CharactersApiActions } from '../actions';
import { Character } from '../../interfaces/character.interface';

export interface State {
  collection: Character[];
  activeCharacterId: string | null;
  residents: string[];
}

export const initialState: State = {
  collection: [],
  activeCharacterId: null,
  residents: [],
};

export const reducer = createReducer(
  initialState,
  on(CharactersPageActions.enter, (state) => {
    return {
      ...state,
      activeCharacterId: null,
    };
  }),
  on(CharactersPageActions.selectCharacter, (state, action) => {
    return {
      ...state,
      activeCharacterId: action.activeCharacterId,
    };
  }),
  on(CharactersApiActions.charactersLoaded, (state, action) => {
    return {
      ...state,
      collection: action.characters,
    };
  }),
  on(CharactersApiActions.characterDetails, (state, action) => {
    return {
      ...state,
      character: action.character,
    };
  }),
  on(CharactersPageActions.selectResidents, (state, action) => {
    return {
      ...state,
      residents: action.residents,
    };
  })
);

export const selectAll = (state: State) => state.collection;
export const selectActiveCharacterId = (state: State) =>
  state.activeCharacterId;
export const selectActiveCharacter = createSelector(
  selectAll,
  selectActiveCharacterId,
  (characters, activeCharacterId) => {
    return (
      characters.find((character) => character.id === activeCharacterId) || null
    );
  }
);
