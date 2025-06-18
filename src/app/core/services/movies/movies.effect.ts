import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from "rxjs";
import { catchError, filter, map, mergeMap, withLatestFrom } from "rxjs/operators"
import { MovieService } from "./movies.service";
import * as MoviesAction from './movies.action';
import * as GenreActions from '../genre/genre.action';
import { API_TMDB_BASE_POSTER_URL } from "../../config/api.config";
import { Store } from "@ngrx/store";
import { selectGenres } from "../genre/genre.selector";

@Injectable()
export class MovieEffects {

    private movieService = inject(MovieService);
    private store = inject(Store);
    action = inject(Actions);

    triggerMoviesByGenreIdAfterGenres = createEffect(() =>
        this.action.pipe(
            ofType(GenreActions.loadGenresSuccess),
            map(action => action.genres?.[0]?.id),
            filter((id): id is string => !!id),
            map((id) => MoviesAction.loadMoviesByGenreId({ id }))
        )
    );

    triggerMoviesListAfterGenres = createEffect(() =>
        this.action.pipe(
            ofType(GenreActions.loadGenresSuccess),
            map(() => MoviesAction.loadMovies())
        )
    );

    loadMovieByGenreId = createEffect(() => {
        return  this.action.pipe(
                    ofType(MoviesAction.loadMoviesByGenreId),
                    withLatestFrom(this.store.select(selectGenres)),
                    mergeMap(([action, genres]) => 
                        this.movieService.getMovieByGenreId(action.id).pipe(
                            map((response: any) => {

                                const genreMap = new Map(genres.map(genre => [genre.id, genre.label]));

                                const transformedMovies = response?.results?.map((movie: any) => {
                                    const genreLabels = movie?.genre_ids?.map((id: number) => genreMap.get(id)) || [];
                                    return  {
                                        card: {
                                            title: movie?.title,
                                            onlyImage: true,
                                            imageUrl: `${API_TMDB_BASE_POSTER_URL}${movie?.poster_path}`,
                                        },
                                        releaseDate: new Date(movie?.release_date),
                                        genres: genreLabels || [],
                                        url: `/movies/${movie?.id}`,
                                        actions: []
                                    }
                                });

                                return MoviesAction.loadMoviesByGenreIdSuccess({ movies: transformedMovies })
                            }),
                            catchError(error => of(MoviesAction.loadMoviesByGenreIdFailure({ error })))
                        )
                    )
                );
    });

    loadListMovies = createEffect(() => {
        return  this.action.pipe(
                    ofType(MoviesAction.loadMovies),
                    withLatestFrom(this.store.select(selectGenres)),
                    mergeMap(([action, genres]) => 
                        this.movieService.getListMovie().pipe(
                            map((response: any) => {

                                const genreMap = new Map(genres.map(genre => [genre.id, genre.label]));

                                const transformedMovies = response?.results?.map((movie: any) => {
                                    const genreLabels = movie?.genre_ids?.map((id: number) => genreMap.get(id)) || [];
                                    return  {
                                        card: {
                                            title: movie?.title,
                                            onlyImage: true,
                                            imageUrl: `${API_TMDB_BASE_POSTER_URL}${movie?.poster_path}`,
                                        },
                                        releaseDate: new Date(movie?.release_date),
                                        genres: genreLabels || [],
                                        url: `/movies/${movie?.id}`,
                                        actions: []
                                    }
                                });

                                return MoviesAction.loadMoviesSuccess({ movies: transformedMovies })
                            }),
                            catchError(error => of(MoviesAction.loadMoviesFailure({ error })))
                        )
                    )
                );
    });

}