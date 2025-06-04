import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../../shared/common/title/title.component";
import { InformationComponent } from "../../../shared/ui/information/information.component";
import { IMovieDetail } from "./movies-detail.interface";
import { VideoComponent } from "../../../shared/common/video/video.component";
import { MoviesListComponent } from "../../../shared/ui/movies-list/movies-list.component";

@Component({
    selector: 'movies-app-movies-detail',
    templateUrl: './movies-detail.component.html',
    styleUrls: ['./movies-detail.component.scss'],
    imports: [
        MainLayoutComponent,
        VideoComponent,
        SectionTitleComponent,
        InformationComponent,
        MoviesListComponent
    ]
})
export class MoviesDetailComponent {
    movieDetail: IMovieDetail = {
        itemVideo: {
            source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster: "https://image.tmdb.org/t/p/w500/xSUsz5n5qtR9yEwmRxEmYvMLN7o.jpg",
            type: "video/mp4"
        },
        informations: [
            {
                label: "Cast",
                values: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
            },
            {
                label: "Genre",
                values: ["Action", "Sci-Fi", "Thriller"]
            },
            {
                label: "Director",
                values: ["Christopher Nolan"]
            },
        ],
        otherMovies: {
            items: [
                {
                    card: {
                        title: "Inception",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
                    },
                    duration: "2h 28m",
                    genres: ["Action", "Sci-Fi", "Thriller"],
                    url: "/movies/1",
                    actions: [
                        { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                    ]
                },
                {
                    card: {
                        title: "Interstellar",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
                    },
                    duration: "2h 49m",
                    genres: ["Adventure", "Drama", "Sci-Fi"],
                    url: "/movies/1",
                    actions: [
                        { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                    ]
                },
            ]
        }
    }
}