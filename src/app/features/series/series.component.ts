import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { CommonModule } from "@angular/common";
import { ISeriesFeature } from "./series.interface";
import { SeriesListComponent } from "../../shared/ui/series-list/series-list.component";

@Component({
    selector: "series-movies-list",
    styleUrls: ['./series.component.scss'],
    templateUrl: './series.component.html',
    imports: [
    MainLayoutComponent,
    SeriesListComponent,
    SectionTitleComponent,
    CommonModule
]
})
export class SeriesComponent {
    series: ISeriesFeature[] = [
    {
        genre: "Action & Adventure",
        series: {
            items: [
                {
                    card: {
                        title: "Mission: Impossible - The Final Reckoning",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/mission_impossible_final_reckoning.jpg"
                    },
                    duration: "2h 30m",
                    genres: ["Action", "Adventure"],
                    url: "/series/1/2/3",
                    actions: [
                        { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                    ]
                }
            ]
        }
    },
    {
        genre: "Animation",
        series: {
        items: [
                {
                    card: {
                        title: "Lilo & Stitch",
                        onlyImage: true,
                        imageUrl: "https://image.tmdb.org/t/p/w500/lilo_and_stitch.jpg"
                    },
                    duration: "1h 25m",
                    genres: ["Animation", "Family"],
                    url: "/series/1/2/3",
                    actions: [
                        { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                    ]
                }
            ]
        }
    },
    {
        genre: "Comedy",
        series: {
        items: [
            {
                card: {
                    title: "Three Friends",
                    onlyImage: true,
                    imageUrl: "https://image.tmdb.org/t/p/w500/three_friends.jpg"
                },
                duration: "1h 40m",
                genres: ["Comedy", "Drama"],
                url: "/series/1/2/3",
                actions: [
                    { label: "Watch later", buttonType: "outlined", icon: "watch_later" }
                ]
            }
        ]
        }
    }
];

}