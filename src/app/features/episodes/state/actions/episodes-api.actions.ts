import { createAction, props } from '@ngrx/store';
import { Episode } from '../../interfaces/episode.interface';

export const episodesLoaded = createAction(
  '[Episode Api] Episode Loaded Success',
  props<{ episodes: Episode[] }>()
);

export const episodeDetails = createAction(
  '[Episode Api] Episode Detail Loaded Success',
  props<{ episode: Episode }>()
);
