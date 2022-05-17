import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Search List] Enter');
export const searchCollectionLoaded = createAction(
  '[Seach Api] Seach Loaded Success',
  props<{ collection: [] }>()
);

export const activeCollectionLoaded = createAction(
  '[Seach Api] Seach Loaded Success',
  props<{ activeCollection: string }>()
);
