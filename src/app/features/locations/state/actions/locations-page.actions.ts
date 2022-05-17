import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Locations List] Enter');
export const selectLocation = createAction(
  '[Location List] Seleted',
  props<{ activeLocationId: string }>()
);
