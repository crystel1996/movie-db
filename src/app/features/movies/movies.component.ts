import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { MoviesListComponent } from "../../shared/ui/movies-list/movies-list.component";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { CommonModule } from "@angular/common";
import { IMoviesFeature } from "./movies.interface";

@Component({
    selector: "movies-movies-list-feature",
    styleUrls: ['./movies.component.scss'],
    templateUrl: './movies.component.html',
    imports: [
    MainLayoutComponent,
    MoviesListComponent,
    SectionTitleComponent,
    CommonModule
]
})
export class MoviesComponent {
    movies: IMoviesFeature[] = [
    {
        genre: "Action & Adventure",
        movies: {
            items: [
                {
                    card: {
                        title: "Mission: Impossible - The Final Reckoning",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/mission_impossible_final_reckoning.jpg"
                    },
                    duration: "2h 30m",
                    genres: ["Action", "Adventure"],
                    url: "/movies/1",
                    actions: [
                        { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                    ]
                }
            ]
        }
    },
    {
        genre: "Animation",
        movies: {
        items: [
            {
                card: {
                    title: "Lilo & Stitch",
                    onlyImage: true,
                    imageUrl: "https://image.tmdb.org/t/p/w500/lilo_and_stitch.jpg"
                },
                duration: "1h 25m",
                genres: ["Animation", "Family"],
                url: "/movies/1",
                actions: [
                    { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                ]
            }
        ]
        }
    },
    {
        genre: "Comedy",
        movies: {
        items: [
                {
                    card: {
                        title: "Three Friends",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/three_friends.jpg"
                    },
                    duration: "1h 40m",
                    genres: ["Comedy", "Drama"],
                    url: "/movies/1",
                    actions: [
                        { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                    ]
                }
            ]
        }
    }
];

}