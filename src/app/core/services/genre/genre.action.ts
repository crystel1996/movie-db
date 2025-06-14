import { createAction, props } from '@ngrx/store';

export const loadGenres = createAction('[Genre] Load Genres');
export const loadGenresSuccess = createAction('[Genre] Load Genres Success', props<{ genres: any[] }>());
export const loadGenresFailure = createAction('[Genre] Load Genres Failure', props<{ error: any }>());