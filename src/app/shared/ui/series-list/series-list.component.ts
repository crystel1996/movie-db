import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CardComponent } from "../../common/card/card.component";
import { ISeriesList } from "./series-list.interface";
import { DEFAULT_SERIES } from "./series-list.constant";

@Component({
    selector: 'movies-series-list',
    templateUrl : './series-list.component.html',
    styleUrls: ['./series-list.component.scss'],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        CardComponent
    ]
})
export class SeriesListComponent {
    @Input() series: ISeriesList = DEFAULT_SERIES;
}