import { Component, OnInit } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { MoviesListComponent } from "../../shared/ui/movies-list/movies-list.component";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { CommonModule } from "@angular/common";
import { Observable, Subject, takeUntil } from "rxjs";
import { Store } from "@ngrx/store";
import * as MovieSelector from './../../core/services/movies/movies.selector'
import { IMoviesList, IMoviesListItem } from "../../shared/ui/movies-list/movies-list.interface";
import { loadMovies } from "../../core/services/movies/movies.action";

@Component({
    selector: "movies-movies-list-feature",
    styleUrls: ['./movies.component.scss'],
    templateUrl: './movies.component.html',
    imports: [
    MainLayoutComponent,
    MoviesListComponent,
    SectionTitleComponent,
    CommonModule
]
})
export class MoviesComponent implements OnInit {

    private destroy$ = new Subject<void>();
    loading!: Observable<boolean>;
    movies!: IMoviesList;

    constructor(private store: Store) {
        this.store
            .select(MovieSelector.selectMovie)
            .pipe(takeUntil(this.destroy$))
            .subscribe((movies: IMoviesListItem[]) => {
                this.movies = {
                    items: movies || []
                }
            });
        this.loading = this.store.select(MovieSelector.selectMovieLoading);
    }

    ngOnInit(): void {
        this.store.dispatch(loadMovies());
    }
    
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}