import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMovieState } from './movies.reducer';
import { IGenreDetailItems } from '../../../shared/ui/genre-detail/genre-detail.interface';
import { IMoviesListItem } from '../../../shared/ui/movies-list/movies-list.interface';
import { IMoviesInformation } from '../../../shared/ui/information/information.interface';
import { IVideo } from '../../../shared/common/video/video.interface';

export const selectMovieState = createFeatureSelector<IMovieState>('movies');


export const selectMovieLoading = createSelector(selectMovieState, state => state.loading);
export const selectMovieError = createSelector(selectMovieState, state => state.error);

export const selectMovie = createSelector(selectMovieState, (state: IMovieState):IMoviesListItem[] => state.movies);
export const selectMovieByGenreId = createSelector(selectMovieState, (state: IMovieState): IGenreDetailItems[] => state.moviesByGenreId);
export const selectSimilarMovie = createSelector(selectMovieState, (state: IMovieState): IMoviesListItem[] => state.similarMovies);
export const selectMovieByID = createSelector(selectMovieState, (state: IMovieState): IMoviesInformation[] => state.movieInformations);
export const selectMovieVideo = createSelector(selectMovieState, (state: IMovieState): IVideo | object => state.video);
export const selectMovieSearch = createSelector(selectMovieState, (state: IMovieState): IMoviesListItem[] => state.search);