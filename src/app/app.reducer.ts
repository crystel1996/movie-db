import { ActionReducerMap } from '@ngrx/store';
import { genreReducer, IGenreState } from './core/services/genre/genre.reducer';

export interface AppState {
  genres: IGenreState;
}

export const appReducers: ActionReducerMap<AppState> = {
  genres: genreReducer
};