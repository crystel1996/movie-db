import { createAction, props } from '@ngrx/store';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction('[Movies] Load Movies Success', props<{ movies: any[] }>());
export const loadMoviesFailure = createAction('[Movies] Load Movies Failure', props<{ error: any }>());

export const loadMoviesByGenreId = createAction('[Movies] Load Movies By Genre ID', props<{ id: string }>());
export const loadMoviesByGenreIdSuccess = createAction('[Movies] Load Movies By Genre ID Success', props<{ movies: any[] }>());
export const loadMoviesByGenreIdFailure = createAction('[Movies] Load Movies Failure', props<{ error: any }>());