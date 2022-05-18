import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Search List] Enter');
export const searchCollectionLoaded = createAction(
  '[Search Api] Search Loaded Success',
  props<{ collection: [] }>()
);

export const activeCollectionLoaded = createAction(
  '[Search Api] Search Loaded Success',
  props<{ activeCollection: string }>()
);
