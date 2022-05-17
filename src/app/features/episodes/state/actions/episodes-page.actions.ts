import { createAction, props } from '@ngrx/store';

export const enter = createAction('[Episodes List] Enter');
export const selectEpisode = createAction(
  '[Episode List] Seleted',
  props<{ activeEpisodeId: string }>()
);
