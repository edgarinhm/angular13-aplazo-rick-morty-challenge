import { createReducer, on } from '@ngrx/store';
import { Search } from '../../../interfaces/search.interface';
import { SearchPageActions } from '../actions';

export interface State {
  activeCollection: string | null;
  queryValue: string | null;
  collection: [];
}

export const initialState: State = {
  activeCollection: null,
  queryValue: null,
  collection: [],
};

export const reducer = createReducer(
  initialState,
  on(SearchPageActions.enter, (state) => {
    return {
      ...state,
      searchCollection: { ...initialState },
    };
  }),
  on(SearchPageActions.searchCollectionLoaded, (state, action) => {
    return {
      ...state,
      collection: { ...action.collection },
    };
  }),
  on(SearchPageActions.activeCollectionLoaded, (state, action) => {
    return {
      ...state,
      activeCollection: action.activeCollection,
    };
  })
);

export const selectActiveCollection = (state: State) => state.activeCollection;

export const selectSearchCollection = (state: State) => state.collection;
