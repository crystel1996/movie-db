import { createReducer, on } from "@ngrx/store";
import * as MoviesAction from './movies.action';
import { IGenreDetailItems } from "../../../shared/ui/genre-detail/genre-detail.interface";
import { IMoviesListItem } from "../../../shared/ui/movies-list/movies-list.interface";
import { IMoviesInformation } from "../../../shared/ui/information/information.interface";
import { IVideo } from "../../../shared/common/video/video.interface";

export interface IMovieState {
    movies: IMoviesListItem[];
    movieInformations: IMoviesInformation[];
    similarMovies: IMoviesListItem[];
    moviesByGenreId: IGenreDetailItems[];
    video: IVideo | object;
    loading: boolean;
    error: any;
}

export const initialState: IMovieState = {
    movies: [],
    video: {},
    movieInformations: [],
    moviesByGenreId: [],
    similarMovies: [],
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

    on(MoviesAction.loadSimilarMovies, state => ({...state, loading: true})),
    on(MoviesAction.loadSimilarMoviesSuccess, (state, { movies }) => ({
        ...state,
        similarMovies: movies,
        loading: false,
        error: null
    })),
    on(MoviesAction.loadSimilarMoviesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(MoviesAction.loadMovieById, state => ({...state, loading: true})),
    on(MoviesAction.loadMovieByIdSuccess, (state, { movieInformations }) => ({
        ...state,
        movieInformations: movieInformations,
        loading: false,
        error: null
    })),
    on(MoviesAction.loadMovieByIdFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(MoviesAction.loadMovieVideo, state => ({...state, loading: true})),
    on(MoviesAction.loadMovieVideoSuccess, (state, { video }) => ({
        ...state,
        video,
        loading: false,
        error: null
    })),
    on(MoviesAction.loadMovieVideoFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

)