import { createAction, props } from '@ngrx/store';
import { Location } from '../../interfaces/locations.interface';

export const locationsLoaded = createAction(
  '[Location Api] Location Loaded Success',
  props<{ locations: Location[] }>()
);

export const locationDetails = createAction(
  '[Location Api] Location Detail Loaded Success',
  props<{ location: Location }>()
);
