import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../../shared/common/title/title.component";
import { InformationComponent } from "../../../shared/ui/information/information.component";
import { VideoComponent } from "../../../shared/common/video/video.component";
import { MoviesListComponent } from "../../../shared/ui/movies-list/movies-list.component";
import { Store } from "@ngrx/store";
import * as MovieSelector from '../../../core/services/movies/movies.selector'
import { map, Subject, takeUntil } from "rxjs";
import { IMoviesList, IMoviesListItem } from "../../../shared/ui/movies-list/movies-list.interface";
import { loadMovieById, loadMovieVideo, loadSimilarMovies } from "../../../core/services/movies/movies.action";
import { ActivatedRoute } from "@angular/router";
import { IMoviesInformation } from "../../../shared/ui/information/information.interface";
import { IVideo } from "../../../shared/common/video/video.interface";
import { Title } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'movies-app-movies-detail',
    templateUrl: './movies-detail.component.html',
    styleUrls: ['./movies-detail.component.scss'],
    imports: [
        MainLayoutComponent,
        VideoComponent,
        SectionTitleComponent,
        InformationComponent,
        MoviesListComponent,
        CommonModule
    ]
})
export class MoviesDetailComponent {

    private destroy$ = new Subject<void>();
    video!: IVideo;
    otherMovies!: IMoviesList;
    informations!: IMoviesInformation[];

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private titleService: Title
    ) {
        this.store
            .select(MovieSelector.selectSimilarMovie)
            .pipe(takeUntil(this.destroy$))
            .subscribe((movies: IMoviesListItem[]) => {
                
                this.otherMovies = {
                    items: movies || []
                }
            });
        this.store
            .select(MovieSelector.selectMovieByID)
            .pipe(takeUntil(this.destroy$))
            .subscribe((moviesInformations: IMoviesInformation[]) => {
                const title = moviesInformations.find((el) => el.code === 'title');
                this.informations = moviesInformations.filter((el) => !el.hidden);
                this.titleService.setTitle(title?.values?.[0] || 'Movie');
                this.video = {
                    ...this.video,
                    poster: moviesInformations.find((el) => el.code == 'poster')?.values?.[0] ?? ''
                }
            });

        this.store
            .select(MovieSelector.selectMovieVideo)
            .pipe(takeUntil(this.destroy$))
            .subscribe((video: IVideo | object) => {
                if(video) {
                    this.video = {
                        ...this.video,
                        source: (video as IVideo).source,
                        type: (video as IVideo).type
                    }
                }
            });
    }

    ngOnInit(): void {
        this.route.paramMap
            .pipe(
                map(params => params.get('id')),
                takeUntil(this.destroy$)
            )
            .subscribe((id) => {
                if(id) {
                    this.store.dispatch(loadSimilarMovies({ id }));
                    this.store.dispatch(loadMovieById({ id }));
                    this.store.dispatch(loadMovieVideo({ id }));
                }
            });
    }
    
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}