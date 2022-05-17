import { createAction, props } from '@ngrx/store';
import { Character } from '../../interfaces/character.interface';

export const charactersLoaded = createAction(
  '[Character Api] Character Loaded Success',
  props<{ characters: Character[] }>()
);

export const characterDetails = createAction(
  '[Character Api] Character Detail Loaded Success',
  props<{ character: Character }>()
);
