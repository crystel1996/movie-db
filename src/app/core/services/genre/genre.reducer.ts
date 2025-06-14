import { createReducer, on } from "@ngrx/store";
import * as GenreActions from './genre.action';
import { IListItem } from "../../../shared/common/list/list.interface";

export interface IGenreState {
    genres: IListItem[];
    loading: boolean;
    error: any;
}

export const initialState: IGenreState = {
    genres: [],
    loading: false,
    error: null
}

export const genreReducer = createReducer(
    initialState,
    on(GenreActions.loadGenres, state => ({...state, loading: true})),
    on(GenreActions.loadGenresSuccess, (state, { genres }) => ({
        ...state,
        genres,
        loading: false,
        error: null
    })),
    on(GenreActions.loadGenresFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
)