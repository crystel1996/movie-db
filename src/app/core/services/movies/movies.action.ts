import { createAction, props } from '@ngrx/store';
import { IVideo } from '../../../shared/common/video/video.interface';

export const loadMovies = createAction('[Movies] Load Movies');
export const loadMoviesSuccess = createAction('[Movies] Load Movies Success', props<{ movies: any[] }>());
export const loadMoviesFailure = createAction('[Movies] Load Movies Failure', props<{ error: any }>());

export const loadMoviesByGenreId = createAction('[Movies] Load Movies By Genre ID', props<{ id: string }>());
export const loadMoviesByGenreIdSuccess = createAction('[Movies] Load Movies By Genre ID Success', props<{ movies: any[] }>());
export const loadMoviesByGenreIdFailure = createAction('[Movies] Load Movies Failure', props<{ error: any }>());

export const loadSimilarMovies = createAction('[Movies] Load Similar Movies', props<{id: string}>());
export const loadSimilarMoviesSuccess = createAction('[Movies] Load Similar Movies Success', props<{ movies: any[] }>());
export const loadSimilarMoviesFailure = createAction('[Movies] Load Similar Movies Error', props<{ error: any }>());

export const loadMovieById = createAction('[Movies] Load Movie By ID', props<{id: string}>());
export const loadMovieByIdSuccess = createAction('[Movies] Load Movie By ID Success', props<{ movieInformations: any[] }>());
export const loadMovieByIdFailure = createAction('[Movies] Load Movie By ID Error', props<{ error: any }>());

export const loadMovieVideo = createAction('[Movies] Load Movie Video', props<{id: string}>());
export const loadMovieVideoSuccess = createAction('[Movies] Load Movie Video Success', props<{ video: IVideo }>());
export const loadMovieVideoFailure = createAction('[Movies] Load Movie Video Error', props<{ error: any }>());

export const loadMovieSearch = createAction('[Movies] Load Movie Search', props<{query: string}>());
export const loadMovieSearchSuccess = createAction('[Movies] Load Movie Search Success', props<{ movies: any[] }>());
export const loadMovieSearchFailure = createAction('[Movies] Load Movie Search Error', props<{ error: any }>());
