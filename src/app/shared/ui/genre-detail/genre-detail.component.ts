import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CardComponent } from "../../common/card/card.component";
import { IGenreDetail } from "./genre-detail.interface";
import { DEFAULT_GENRE_DETAIL } from "./genre-detail.constants";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'movies-genre-detail',
    templateUrl: './genre-detail.component.html',
    styleUrls: ['./genre-detail.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        CardComponent
    ]
})
export class GenreDetailComponent {
    @Input() genreDetail: IGenreDetail = DEFAULT_GENRE_DETAIL;
}