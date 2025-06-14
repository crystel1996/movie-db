import { Component, OnInit } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { GenreListComponent } from "../../shared/ui/genre-list/genre-list.component";
import { AlignDirectionEnum } from "../../core/utils/enum/align-direction.enum";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { IGenreSectionTitle } from "./genre.interface";
import { IList, IListItem } from "../../shared/common/list/list.interface";
import { Store } from "@ngrx/store";
import { loadGenres } from "../../core/services/genre/genre.action";
import * as GenreSelector from '../../core/services/genre/genre.selector'
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
    selector: 'movies-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.scss'],
    standalone: true,
    imports: [
        MainLayoutComponent,
        GenreListComponent,
        SectionTitleComponent
    ]
})
export class GenreComponent implements OnInit {

    genreList!: IList;
    error!: Observable<boolean>;
    loading!: Observable<boolean>;
    private destroy$ = new Subject<void>();

    constructor(private store: Store) {
        const items = this.store
                        .select(GenreSelector.selectGenres)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((genres: IListItem[]) => {
                            this.genreList = {
                                items: genres,
                                direction: AlignDirectionEnum.HORIZONTAL,
                                customClass: "nav-list"
                            };

                        });
        
        this.error = this.store.select(GenreSelector.selectGenresError);
        this.loading = this.store.select(GenreSelector.selectGenresLoading)
    }

    sectionTitle: IGenreSectionTitle = {
        list: "All genres"
    }

    ngOnInit(): void {
        this.store.dispatch(loadGenres());
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

} 