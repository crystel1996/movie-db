import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../../shared/common/title/title.component";
import { IGenreDetail, IGenreDetailItems } from "../../../shared/ui/genre-detail/genre-detail.interface";
import { GenreDetailComponent } from "../../../shared/ui/genre-detail/genre-detail.component";
import { GenreListComponent } from "../../../shared/ui/genre-list/genre-list.component";
import { AlignDirectionEnum } from "../../../core/utils/enum/align-direction.enum";
import { IList } from "../../../shared/common/list/list.interface";
import { combineLatestWith, filter, map, Observable, Subject, takeUntil } from "rxjs";
import { Store } from "@ngrx/store";
import * as GenreSelector from '../../../core/services/genre/genre.selector';
import { loadMoviesByGenreId } from "../../../core/services/movies/movies.action";
import * as MovieSelector from '../../../core/services/movies/movies.selector';
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../../../shared/common/loading/loading.component";

@Component({
    selector: 'movies-genre-detail-feature',
    templateUrl: './genre-detail.component.html',
    styleUrls: ['./genre-detail.component.scss'],
    standalone: true,
    imports: [
        MainLayoutComponent,
        SectionTitleComponent,
        GenreDetailComponent,
        GenreListComponent,
        LoadingComponent,
        CommonModule
    ]
})
export class GenreDetailFeature implements OnInit {
    private destroy$ = new Subject<void>();
    genre!: string;
    genreList!: IList;
    genreDetail!: IGenreDetail;
    loadingMovieByGenreId!: Observable<boolean>;
    loadingGenreList!: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private titleService: Title,
        private store: Store
    ) {
        this.store
            .select(MovieSelector.selectMovieByGenreId)
            .pipe(takeUntil(this.destroy$))
            .subscribe((movies: IGenreDetailItems[]) => {
                this.genreDetail = {
                    items: movies
                }
            });
    }

    ngOnInit(): void {
        this.route.paramMap
            .pipe(
                map(params => params.get('id')),
                filter((id): id is string => !!id),
                combineLatestWith(this.store.select(GenreSelector.selectGenres)),
                takeUntil(this.destroy$)
            )
            .subscribe(([id, genres]) => {
                this.store.dispatch(loadMoviesByGenreId({ id }));
                this.genreList = {
                    direction: AlignDirectionEnum.HORIZONTAL,
                    customClass: 'nav-list',
                    items: [...genres]
                };
                const matchedGenre = genres.find(g => g.id == id);
                this.genre = matchedGenre?.label || '';
                this.titleService.setTitle(this.genre);
            });
        this.loadingMovieByGenreId = this.store.select(MovieSelector.selectMovieLoading);
        this.loadingGenreList = this.store.select(GenreSelector.selectGenresLoading);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}