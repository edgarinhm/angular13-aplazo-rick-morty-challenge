import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Character List] Enter');
export const selectCharacter = createAction(
  '[Character List] Seleted',
  props<{ activeCharacterId: string }>()
);
