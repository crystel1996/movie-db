import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { combineLatest, of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap, take, withLatestFrom } from "rxjs/operators"
import { MovieService } from "./movies.service";
import * as MoviesAction from './movies.action';
import * as GenreActions from '../genre/genre.action';
import { API_TMDB_BASE_POSTER_URL } from "../../config/api.config";
import { select, Store } from "@ngrx/store";
import { selectGenres } from "../genre/genre.selector";
import { selectRouteParam } from "../router/router.selector";

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

    triggerSimilarMoviesAfterGenres = createEffect(() =>
        this.store.pipe(
            select(selectRouteParam('id')),
            filter(id => !!id),
            take(1),
            switchMap(id =>
            this.action.pipe(
                ofType(GenreActions.loadGenresSuccess),
                map(() => MoviesAction.loadSimilarMovies({ id }))
            )
            )
        )
    )

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

    loadSimilarMovies = createEffect(() =>
        combineLatest([
            this.action.pipe(ofType(MoviesAction.loadSimilarMovies)),
            this.store.select(selectGenres)
        ]).pipe(
            filter(([_, genres]) => genres.length > 0), // ✅ attend que genres soit peuplé
            take(1), // 👈 optionnel : ne déclenche qu'une fois si tu veux
            mergeMap(([action, genres]) =>
                this.movieService.getSimilarMovies(action.id).pipe(
                    map((response: any) => {
                        const genreMap = new Map(genres.map(genre => [genre.id, genre.label]));

                        const transformedSimilarMovies = response?.results?.map((movie: any) => {
                        const genreLabels = movie?.genre_ids?.map((id: number) => genreMap.get(id)) || [];

                        return {
                            card: {
                                title: movie?.title,
                                onlyImage: true,
                                imageUrl: `${API_TMDB_BASE_POSTER_URL}${movie?.poster_path}`,
                            },
                            releaseDate: new Date(movie?.release_date),
                            genres: genreLabels || [],
                            url: `/movies/${movie?.id}`,
                            actions: []
                        };
                    });

                        return MoviesAction.loadSimilarMoviesSuccess({ movies: transformedSimilarMovies });
                    }),
                    catchError(error => of(MoviesAction.loadSimilarMoviesFailure({ error })))
                )
            )
        )
    );


    loadMovieById = createEffect(() => {
        return this.action.pipe(
            ofType(MoviesAction.loadMovieById),
            mergeMap((action) => 
                this.movieService.getMovieById(action.id).pipe(
                    map((response: any) => {
                        const transformedMovieInformations = [
                            {
                                code: 'title',
                                label: 'Title',
                                values: [response?.original_title]
                            },
                            {
                                code: 'descrption',
                                label: 'Description',
                                values: [response?.overview]
                            },
                            {
                                code: 'genre',
                                label: 'Genres',
                                values: response?.genres?.map((item: any) => item?.name) || []
                            },
                            {
                                code: 'poster',
                                label: 'Poster',
                                values: [`${API_TMDB_BASE_POSTER_URL}${response?.poster_path}`],
                                hidden: true
                            }
                        ];
                        return MoviesAction.loadMovieByIdSuccess({ movieInformations: transformedMovieInformations })
                    }),
                    catchError(error => of(MoviesAction.loadMovieByIdFailure({ error })))
                )
            )
        )
    });

    loadVideo =  createEffect(() => {
        return this.action.pipe(
            ofType(MoviesAction.loadMovieVideo),
            mergeMap((action) => 
                this.movieService.getMovieVideo(action.id).pipe(
                    map((response: any) => {

                        const result = response?.results?.[0];
                        const transformedMovieVideo = {
                            source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                            poster: `${API_TMDB_BASE_POSTER_URL}${result?.poster_path}`,
                            type: "video/mp4"
                        }
                        return MoviesAction.loadMovieVideoSuccess({ video: transformedMovieVideo })
                    }),
                    catchError(error => of(MoviesAction.loadMovieVideoFailure({ error })))
                )
            )
        )
    });

}