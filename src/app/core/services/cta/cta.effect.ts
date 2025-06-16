import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators"
import { CtaService } from "./cta.service";
import * as CtaActions from './cta.action';
import { API_TMDB_BASE_POSTER_URL } from "../../config/api.config";

@Injectable()
export class CtaEffects {

    private ctaService = inject(CtaService);
    action = inject(Actions);


    loadCta = createEffect(() => {
        return  this.action.pipe(
                    ofType(CtaActions.loadCta),
                    mergeMap(() => 
                        this.ctaService.getCta().pipe(
                            map((response: any) => {

                               

                                const randomCta = response?.results?.map((cta: any) => {
                                    return {
                                                id: cta?.id,
                                                title: cta?.title,
                                                description: cta?.overview,
                                                imageUrl: `${API_TMDB_BASE_POSTER_URL}${cta?.poster_path}`,
                                                actions: [
                                                    { label: "Watch Now", url: `/movies/${cta?.id}`, buttonType: "filled", icon: "play_arrow" },
                                                ]
                                            }
                                })?.sort(() => 0.5 - Math.random());

                                const transformedCta = randomCta?.slice(0, 5) || [];

                                
                                return CtaActions.loadCtaSuccess({ cta: transformedCta })
                            }),
                            catchError(error => of(CtaActions.loadCtaFailure({ error })))
                        )
                    )
                );
    });

}