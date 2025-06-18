import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMovieState } from './movies.reducer';
import { IGenreDetailItems } from '../../../shared/ui/genre-detail/genre-detail.interface';

export const selectMovieState = createFeatureSelector<IMovieState>('movies');

export const selectMovie = createSelector(selectMovieState, (state: IMovieState):IGenreDetailItems[] => state.movies);
export const selectMovieByGenreId = createSelector(selectMovieState, (state: IMovieState): IGenreDetailItems[] => state.moviesByGenreId);

export const selectMovieLoading = createSelector(selectMovieState, state => state.loading);
export const selectMovieError = createSelector(selectMovieState, state => state.error);