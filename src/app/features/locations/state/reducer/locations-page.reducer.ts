import { createReducer, createSelector, on } from '@ngrx/store';
import { Location } from '../../interfaces/locations.interface';
import { LocationsApiActions, LocationsPageActions } from '../actions';

export interface State {
  collection: Location[];
  activeLocationId: string | null;
}

export const initialState: State = {
  collection: [],
  activeLocationId: null,
};

export const reducer = createReducer(
  initialState,
  on(LocationsPageActions.enter, (state) => {
    return {
      ...state,
      activeLocationId: null,
    };
  }),
  on(LocationsPageActions.selectLocation, (state, action) => {
    return {
      ...state,
      activeLocationId: action.activeLocationId,
    };
  }),
  on(LocationsApiActions.locationsLoaded, (state, action) => {
    return {
      ...state,
      collection: action.locations,
    };
  }),

  on(LocationsApiActions.locationDetails, (state, action) => {
    return {
      ...state,
      location: action.location,
    };
  })
);

export const selectAll = (state: State) => state.collection;
export const selectActiveLocationId = (state: State) => state.activeLocationId;
export const selectActiveLocation = createSelector(
  selectAll,
  selectActiveLocationId,
  (locations, activeLocationId) => {
    return (
      locations.find((location) => location.id === activeLocationId) || null
    );
  }
);
