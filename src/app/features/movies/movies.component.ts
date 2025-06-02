import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { MoviesListComponent } from "../../shared/ui/movies-list/movies-list.component";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { CommonModule } from "@angular/common";
import { IMoviesFeature } from "./movies.interface";

@Component({
    selector: "movies-movies-list",
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
                    url: "/watch/mission-impossible-final-reckoning"
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
            url: "/watch/lilo-and-stitch"
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
            url: "/watch/three-friends"
            }
        ]
        }
    },
    {
        genre: "Crime",
        movies: {
        items: [
            {
            card: {
                title: "The Usual Suspects",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/the_usual_suspects.jpg"
            },
            duration: "1h 46m",
            genres: ["Crime", "Mystery"],
            url: "/watch/the-usual-suspects"
            }
        ]
        }
    },
    {
        genre: "Documentary",
        movies: {
        items: [
            {
            card: {
                title: "Shark Whisperer",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/shark_whisperer.jpg"
            },
            duration: "1h 30m",
            genres: ["Documentary"],
            url: "/watch/shark-whisperer"
            }
        ]
        }
    },
    {
        genre: "Drama",
        movies: {
        items: [
            {
            card: {
                title: "Sinners",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/sinners.jpg"
            },
            duration: "2h 10m",
            genres: ["Drama"],
            url: "/watch/sinners"
            }
        ]
        }
    },
    {
        genre: "Family",
        movies: {
        items: [
            {
            card: {
                title: "Tourist Family",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/tourist_family.jpg"
            },
            duration: "1h 35m",
            genres: ["Family", "Drama"],
            url: "/watch/tourist-family"
            }
        ]
        }
    },
    {
        genre: "Kids",
        movies: {
        items: [
            {
            card: {
                title: "My Little Pony: A New Generation",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/my_little_pony_new_generation.jpg"
            },
            duration: "1h 31m",
            genres: ["Animation", "Kids"],
            url: "/watch/my-little-pony-new-generation"
            }
        ]
        }
    },
    {
        genre: "Mystery",
        movies: {
        items: [
            {
            card: {
                title: "Knives Out",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/knives_out.jpg"
            },
            duration: "2h 10m",
            genres: ["Mystery", "Crime"],
            url: "/watch/knives-out"
            }
        ]
        }
    },
    {
        genre: "News",
        movies: {
        items: [
            {
            card: {
                title: "The Post",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/the_post.jpg"
            },
            duration: "1h 56m",
            genres: ["Drama", "History"],
            url: "/watch/the-post"
            }
        ]
        }
    },
    {
        genre: "Reality",
        movies: {
        items: [
            {
            card: {
                title: "American Factory",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/american_factory.jpg"
            },
            duration: "1h 50m",
            genres: ["Documentary"],
            url: "/watch/american-factory"
            }
        ]
        }
    },
    {
        genre: "Sci-Fi & Fantasy",
        movies: {
        items: [
            {
            card: {
                title: "Dune",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/dune.jpg"
            },
            duration: "2h 35m",
            genres: ["Sci-Fi", "Adventure"],
            url: "/watch/dune"
            }
        ]
        }
    },
    {
        genre: "Soap",
        movies: {
        items: [
            {
            card: {
                title: "The Bold and the Beautiful",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/the_bold_and_the_beautiful.jpg"
            },
            duration: "1h 0m",
            genres: ["Soap", "Drama"],
            url: "/watch/the-bold-and-the-beautiful"
            }
        ]
        }
    },
    {
        genre: "Talk",
        movies: {
        items: [
            {
            card: {
                title: "The Ellen DeGeneres Show",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/ellen_degeneres_show.jpg"
            },
            duration: "1h 0m",
            genres: ["Talk", "Comedy"],
            url: "/watch/the-ellen-degeneres-show"
            }
        ]
        }
    },
    {
        genre: "War & Politics",
        movies: {
        items: [
            {
            card: {
                title: "The Imitation Game",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/the_imitation_game.jpg"
            },
            duration: "1h 53m",
            genres: ["War", "Drama"],
            url: "/watch/the-imitation-game"
            }
        ]
        }
    },
    {
        genre: "Western",
        movies: {
        items: [
            {
            card: {
                title: "The Harder They Fall",
                onlyImage: true,
                imageUrl: "https://image.tmdb.org/t/p/w500/the_harder_they_fall.jpg"
            },
            duration: "2h 19m",
            genres: ["Western", "Action"],
            url: "/watch/the-harder-they-fall"
            }
        ]
        }
    }
];

}