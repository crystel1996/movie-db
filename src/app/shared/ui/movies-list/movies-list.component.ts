import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CardComponent } from "../../common/card/card.component";
import { IMoviesList } from "./movies-list.interface";
import { DEFAULT_MOVIES } from "./movies-list.constant";

@Component({
    selector: 'movies-list',
    templateUrl : './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss'],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        CardComponent
    ]
})
export class MoviesListComponent {
    @Input() movies: IMoviesList = DEFAULT_MOVIES;
}