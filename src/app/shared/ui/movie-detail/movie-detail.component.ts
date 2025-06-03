import { Component } from "@angular/core";
import { VideoComponent } from "../../common/video/video.component";

@Component({
    selector: 'movies-movies-detail',
    standalone: true,
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss'],
    imports: [VideoComponent]
})
export class MovieDetailComponent {

}