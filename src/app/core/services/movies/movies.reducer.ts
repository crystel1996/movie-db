import { createReducer, on } from "@ngrx/store";
import * as MoviesAction from './movies.action';
import { IGenreDetailItems } from "../../../shared/ui/genre-detail/genre-detail.interface";
import { IMoviesListItem } from "../../../shared/ui/movies-list/movies-list.interface";

export interface IMovieState {
    movies: IMoviesListItem[];
    moviesByGenreId: IGenreDetailItems[];
    loading: boolean;
    error: any;
}

export const initialState: IMovieState = {
    movies: [],
    moviesByGenreId: [],
    loading: false,
    error: null
}

export const movieReducer = createReducer(
    initialState,

    on(MoviesAction.loadMovies, state => ({...state, loading: true})),
    on(MoviesAction.loadMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies,
        loading: false,
        error: null
    })),
    on(MoviesAction.loadMoviesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(MoviesAction.loadMoviesByGenreId, state => ({...state, loading: true})),
    on(MoviesAction.loadMoviesByGenreIdSuccess, (state, { movies }) => ({
        ...state,
        moviesByGenreId: movies,
        loading: false,
        error: null
    })),
    on(MoviesAction.loadMoviesByGenreIdFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
)