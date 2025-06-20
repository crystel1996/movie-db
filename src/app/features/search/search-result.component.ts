import { Component, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { MoviesListComponent } from "../../shared/ui/movies-list/movies-list.component";
import { IMoviesList, IMoviesListItem } from "../../shared/ui/movies-list/movies-list.interface";
import { Store } from "@ngrx/store";
import { loadMovieSearch } from "../../core/services/movies/movies.action";
import { ActivatedRoute } from "@angular/router";
import * as MovieSelector from './../../core/services/movies/movies.selector'

@Component({
    selector: 'movies-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
    imports: [MainLayoutComponent, SectionTitleComponent, MoviesListComponent]
})
export class SearchResultComponent implements OnInit {
    private destroy$ = new Subject<void>();
    loading!: Observable<boolean>;
    movies!: IMoviesList;

    constructor(
        private store: Store,
        private route: ActivatedRoute
    ) {
        this.store
            .select(MovieSelector.selectMovieSearch)
            .pipe(takeUntil(this.destroy$))
            .subscribe((movies: IMoviesListItem[]) => {
                this.movies = {
                    items: movies || []
                }
            });
        this.loading = this.store.select(MovieSelector.selectMovieLoading);
    }

    ngOnInit(): void {
        this.route.queryParams
            .pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                const query = params['q'];
                if (query) {
                    this.store.dispatch(loadMovieSearch({ query }));
                }
            });
    }
        
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}