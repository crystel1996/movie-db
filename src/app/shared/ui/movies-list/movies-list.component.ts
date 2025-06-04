import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CardComponent } from "../../common/card/card.component";
import { IMoviesList } from "./movies-list.interface";
import { DEFAULT_MOVIES } from "./movies-list.constant";
import { ActionComponent } from "../../common/action/action.component";

@Component({
    selector: 'movies-movies-list',
    templateUrl : './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss'],
    imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    CardComponent,
    ActionComponent
]
})
export class MoviesListComponent {
    @Input() movies: IMoviesList = DEFAULT_MOVIES;
}