import { Component, EventEmitter, Input } from "@angular/core";
import { ISeriesSeasons } from "./series-seasons.interface";
import { ButtonListComponent } from "../../common/button-list/button-list.component";
import { DEFAULT_SERIES_SEASONS } from "./series-seasons.constants";
import { IButtonList, IButtonListItem } from "../../common/button-list/button-list.interface";
import { Subject, takeUntil } from "rxjs";
import { SeriesListComponent } from "../series-list/series-list.component";
import { ISeriesList } from "../series-list/series-list.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'movies-series-seasons',
    templateUrl: './series-seasons.component.html',
    styleUrls: ['./series-seasons.component.scss'],
    imports: [
        CommonModule,
        ButtonListComponent,
        SeriesListComponent
    ]
})
export class SeriesSeasonsComponent {
    @Input() input: ISeriesSeasons = DEFAULT_SERIES_SEASONS;

    private destroy$ = new Subject<void>();

    onSelectedItem = new EventEmitter<IButtonListItem>();

    seriesSeasonsButtonList!: IButtonList;

    series!: ISeriesList;

    constructor() {
        this.onSelectedItem
        .pipe(takeUntil(this.destroy$))
        .subscribe((selectedItem) => {
            this.series = {
                items: this.input.items
                        .filter((item) => item.seasonId == selectedItem?.id)
                        .map((item) => item.series).flat()
            }
        });
    }

    ngOnInit() {
        this.seriesSeasonsButtonList = {
            ...this.seriesSeasonsButtonList,
            selectedItem: this.input.seasons[0],                 
            labels: this.input.seasons,
            onSelectedItem: this.onSelectedItem
        };  
        this.series = {
            items: this.input.items
                        .filter((item) => item.seasonId == this.seriesSeasonsButtonList.selectedItem?.id)
                        .map((item) => item.series).flat()
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}