import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators"
import { GenreService } from "./genre.service";
import * as GenreActions from './genre.action';

@Injectable()
export class GenreEffects {

    private genreService = inject(GenreService);
    action = inject(Actions);


    loadGenre = createEffect(() => {
        return  this.action.pipe(
                    ofType(GenreActions.loadGenres),
                    mergeMap(() => 
                        this.genreService.getGenres().pipe(
                            map((response: any) => {

                               

                                const transformedGenres = response?.genres?.map((genre: any) => {
                                    return {
                                        id: genre.id,
                                        path: `/genres/${genre.id}`,
                                        label: genre.name
                                    }
                                });

                                
                                return GenreActions.loadGenresSuccess({ genres: transformedGenres })
                            }),
                            catchError(error => of(GenreActions.loadGenresFailure({ error })))
                        )
                    )
                );
    });

}