import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGenreState } from './genre.reducer';
import { IListItem } from '../../../shared/common/list/list.interface';

export const selectGenreState = createFeatureSelector<IGenreState>('genres');

export const selectGenres = createSelector(selectGenreState, (state: IGenreState):IListItem[] => state.genres);
export const selectGenresLoading = createSelector(selectGenreState, state => state.loading);
export const selectGenresError = createSelector(selectGenreState, state => state.error);