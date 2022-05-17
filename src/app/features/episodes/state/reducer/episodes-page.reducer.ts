import { createReducer, createSelector, on } from '@ngrx/store';
import { Episode } from '../../interfaces/episode.interface';
import { EpisodesApiActions, EpisodesPageActions } from '../actions';

export interface State {
  collection: Episode[];
  activeEpisodeId: string | null;
}

export const initialState: State = {
  collection: [],
  activeEpisodeId: null,
};

export const reducer = createReducer(
  initialState,
  on(EpisodesPageActions.enter, (state) => {
    return {
      ...state,
      activeEpisodeId: null,
    };
  }),
  on(EpisodesPageActions.selectEpisode, (state, action) => {
    return {
      ...state,
      activeEpisodeId: action.activeEpisodeId,
    };
  }),
  on(EpisodesApiActions.episodesLoaded, (state, action) => {
    return {
      ...state,
      collection: action.episodes,
    };
  }),

  on(EpisodesApiActions.episodeDetails, (state, action) => {
    return {
      ...state,
      episode: action.episode,
    };
  })
);

export const selectAll = (state: State) => state.collection;
export const selectActiveEpisodeId = (state: State) => state.activeEpisodeId;
export const selectActiveEpisode = createSelector(
  selectAll,
  selectActiveEpisodeId,
  (episodes, activeEpisodeId) => {
    return episodes.find((episode) => episode.id === activeEpisodeId) || null;
  }
);
