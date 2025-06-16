import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators"
import { NewReleaseService } from "./new-release.service";
import * as NewReleaseActions from './new-release.action';
import * as GenreActions from '../genre/genre.action';
import { API_TMDB_BASE_POSTER_URL } from "../../config/api.config";
import { Store } from "@ngrx/store";
import { selectGenres } from "../genre/genre.selector";

@Injectable()
export class NewReleaseEffects {

    private newReleaseService = inject(NewReleaseService);
    private store = inject(Store);
    action = inject(Actions);

    triggerNewReleasesAfterGenres = createEffect(() =>
        this.action.pipe(
            ofType(GenreActions.loadGenresSuccess),
            map(() => NewReleaseActions.loadNewReleases())
        )
    );

    loadNewReleases = createEffect(() => {
        return  this.action.pipe(
                    ofType(NewReleaseActions.loadNewReleases),
                    withLatestFrom(this.store.select(selectGenres)),
                    mergeMap(([action, genres]) => 
                        this.newReleaseService.getNewReleases().pipe(
                            map((response: any) => {

                                const genreMap = new Map(genres.map(genre => [genre.id, genre.label]));

                                console.log('GENRES', genres)

                                const transformedNewReleases = response?.results?.map((newRelease: any) => {
                                    const genreLabels = newRelease?.genre_ids?.map((id: number) => genreMap.get(id)) || [];
                                    return  {
                                        card: {
                                            title: newRelease?.title,
                                            onlyImage: true,
                                            imageUrl: `${API_TMDB_BASE_POSTER_URL}${newRelease?.poster_path}`,
                                        },
                                        releaseDate: new Date(newRelease?.release_date),
                                        genres: genreLabels || [],
                                        url: `/movies/${newRelease?.id}`,
                                        actions: []
                                    }
                                });

                                console.log('TRANSFORMED', transformedNewReleases);

                                return NewReleaseActions.loadNewReleasesSuccess({ newReleases: transformedNewReleases })
                            }),
                            catchError(error => of(NewReleaseActions.loadNewReleasesFailure({ error })))
                        )
                    )
                );
    });

}