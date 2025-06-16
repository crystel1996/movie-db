import { inject, Injectable } from "@angular/core";
import { RecommendationService } from "./recommendation.service";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import * as GenreActions from '../genre/genre.action';
import * as RecommendationActions from './recommendation.action';
import { selectGenres } from "../genre/genre.selector";
import { API_TMDB_BASE_POSTER_URL } from "../../config/api.config";

@Injectable()
export class RecommendationEffect {
    private recommendationService = inject(RecommendationService);
    private store = inject(Store);
    action = inject(Actions);

    triggerNewReleasesAfterGenres = createEffect(() =>
            this.action.pipe(
                ofType(GenreActions.loadGenresSuccess),
                map(() => RecommendationActions.loadRecommendation())
            )
    );

    loadRecommendations = createEffect(() => {
            return  this.action.pipe(
                        ofType(RecommendationActions.loadRecommendation),
                        withLatestFrom(this.store.select(selectGenres)),
                        mergeMap(([action, genres]) => 
                            this.recommendationService.getRecommendations().pipe(
                                map((response: any) => {
    
                                    const genreMap = new Map(genres.map(genre => [genre.id, genre.label]));
    
                                    const transformedRecommendations = response?.results?.map((recommendation: any) => {
                                        const genreLabels = recommendation?.genre_ids?.map((id: number) => genreMap.get(id)) || [];
                                        return  {
                                            card: {
                                                title: recommendation?.title,
                                                onlyImage: true,
                                                imageUrl: `${API_TMDB_BASE_POSTER_URL}${recommendation?.poster_path}`,
                                            },
                                            releaseDate: new Date(recommendation?.release_date),
                                            genres: genreLabels || [],
                                            url: `/movies/${recommendation?.id}`,
                                            actions: []
                                        }
                                    });
    
                                    return RecommendationActions.loadRecommendationSuccess({ recommendations: transformedRecommendations })
                                }),
                                catchError(error => of(RecommendationActions.loadRecommendationFailure({ error })))
                            )
                        )
                    );
    });

}