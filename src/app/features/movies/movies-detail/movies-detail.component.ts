import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { MovieDetailComponent } from "../../../shared/ui/movie-detail/movie-detail.component";

@Component({
    selector: 'movies-app-movies-detail',
    templateUrl: './movies-detail.component.html',
    styleUrls: ['./movies-detail.component.scss'],
    imports: [
    MainLayoutComponent,
    MovieDetailComponent
]
})
export class MoviesDetailComponent {}