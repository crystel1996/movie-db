import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { CallToActionComponent } from "../../shared/ui/call-to-action/call-to-action.component";
import { ICarousel } from "../../shared/common/carousel/carousel.interface";
import { RecentlyUpdatedComponent } from "../../shared/ui/recently-updated/recently-updated.component";
import { IRecentlyUpdated } from "../../shared/ui/recently-updated/recently-updated.interface";
import { SectionTitleComponent } from "../../shared/common/title/title.component";

@Component({
    selector: "movies-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [
    MainLayoutComponent,
    CallToActionComponent,
    RecentlyUpdatedComponent,
    SectionTitleComponent
],
})
export class HomeComponent {

    carouselMovies: ICarousel = {
        items: [
            {
                id: "1",
                title: "Inception",
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
                imageUrl: "https://placeholderimage.eu/api/800/600",
                actions: [
                    { label: "Watch Now", url: "/watch/inception", buttonType: "filled", icon: "play_arrow" },
                    { label: "Watch later", url: "/movies/inception", buttonType: "outlined", icon: "watch_later" }
                ]
            },
            {
                id: "2",
                title: "The Dark Knight",
                description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                imageUrl: "https://placeholderimage.eu/api/800/600",
                actions: [
                    { label: "Watch Now", url: "/watch/inception", buttonType: "filled", icon: "play_arrow" },
                    { label: "Watch later", url: "/movies/inception", buttonType: "outlined", icon: "watch_later" }
                ]
            }
        ],
    };

    recentlyUpdatedMovies: IRecentlyUpdated = {
        items:  [
                    {
                        card: {
                            title: "Inception",
                            onlyImage: true,
                            imageUrl: "https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
                        },
                        lastEpisode: "Series/S1/Episode 1",
                        updatedAt: new Date("2023-10-01T12:00:00Z"),
                        url: "/watch/inception"
                    },
                    {
                        card: {
                            title: "The Night Agent",
                            onlyImage: true,
                            imageUrl: "https://image.tmdb.org/t/p/w500/xSUsz5n5qtR9yEwmRxEmYvMLN7o.jpg",
                        },
                        lastEpisode: "Series/S4/Episode 2",
                        updatedAt: new Date("2022-10-01T12:00:00Z"),
                        url: "/watch/the-night-agent"
                    },
                    {
                        card: {
                            title: "Stranger Things",
                            onlyImage: true,
                            imageUrl: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
                        },
                        lastEpisode: "Series/S4/Episode 9",
                        updatedAt: new Date("2022-07-01T12:00:00Z"),
                        url: "/watch/stranger-things"
                    },
                    {
                        card: {
                            title: "The Witcher",
                            onlyImage: true,
                            imageUrl: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
                        },
                        lastEpisode: "Series/S3/Episode 8",
                        updatedAt: new Date("2023-08-15T14:45:00Z"),
                        url: "/watch/the-witcher"
                    },
                    {
                        card: {
                            title: "The Mandalorian",
                            onlyImage: true,
                            imageUrl: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
                        },
                        lastEpisode: "Series/S3/Episode 8",
                        updatedAt: new Date("2023-04-19T13:00:00Z"),
                        url: "/watch/the-mandalorian"
                    },
                    {
                        card: {
                            title: "Wednesday",
                            onlyImage: true,
                            imageUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
                        },
                        lastEpisode: "Series/S1/Episode 8",
                        updatedAt: new Date("2022-11-23T18:00:00Z"),
                        url: "/watch/wednesday"
                    }
                ]
    }

}