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
                    url: "/watch/inception"
                },
                {
                    card: {
                        title: "Interstellar",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
                    },
                    duration: "2h 49m",
                    genres: ["Adventure", "Drama", "Sci-Fi"],
                    url: "/watch/interstellar"
                },
                {
                    card: {
                        title: "The Matrix",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                    },
                    duration: "2h 16m",
                    genres: ["Action", "Sci-Fi"],
                    url: "/watch/the-matrix"
                },
                {
                    card: {
                        title: "Parasite",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
                    },
                    duration: "2h 12m",
                    genres: ["Drama", "Thriller"],
                    url: "/watch/parasite"
                },
                {
                    card: {
                        title: "Avengers: Endgame",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    },
                    duration: "3h 1m",
                    genres: ["Action", "Adventure", "Sci-Fi"],
                    url: "/watch/avengers-endgame"
                }
            ]
        }
    }
}