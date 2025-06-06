import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { VideoComponent } from "../../../shared/common/video/video.component";
import { ISerieDetail } from "./series-detail.interface";
import { SectionTitleComponent } from "../../../shared/common/title/title.component";
import { InformationComponent } from "../../../shared/ui/information/information.component";
import { MoviesListComponent } from "../../../shared/ui/movies-list/movies-list.component";

@Component({
    selector: 'movies-series-detail',
    standalone: true,
    templateUrl: './series-detail.component.html',
    styleUrls: ['./series-detail.component.scss'],
    imports: [
    MainLayoutComponent,
    VideoComponent,
    SectionTitleComponent,
    InformationComponent,
    MoviesListComponent
]
})
export class SeriesDetailComponent {
    seriesDetail: ISerieDetail = {
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
        otherSeries: {
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
    }
}