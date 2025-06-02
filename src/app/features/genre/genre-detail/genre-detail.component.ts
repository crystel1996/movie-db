import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../../shared/common/title/title.component";
import { IGenreDetail } from "../../../shared/ui/genre-detail/genre-detail.interface";
import { GenreDetailComponent } from "../../../shared/ui/genre-detail/genre-detail.component";

@Component({
    selector: 'movies-genre-detail-feature',
    templateUrl: './genre-detail.component.html',
    styleUrls: ['./genre-detail.component.scss'],
    standalone: true,
    imports: [
    MainLayoutComponent,
    SectionTitleComponent,
    GenreDetailComponent
]
})
export class GenreDetailFeature implements OnInit {
    private genreId!: string;
    genre!: string;
    genreDetail: IGenreDetail = {
        items: [
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
                    title: "Mad Max: Fury Road",
                    onlyImage: true,
                    imageUrl: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
                    },
                    duration: "2h 0m",
                    genres: ["Action", "Adventure", "Sci-Fi"],
                    url: "/watch/mad-max-fury-road"
                },
                {
                    card: {
                    title: "Blade Runner 2049",
                    onlyImage: true,
                    imageUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
                    },
                    duration: "2h 44m",
                    genres: ["Drama", "Sci-Fi", "Mystery"],
                    url: "/watch/blade-runner-2049"
                }
            ]
    }

    constructor(
        private route: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit(): void {
        this.genreId = this.route.snapshot.paramMap.get('id')!;
        this.genre = 'Action'
        this.titleService.setTitle(this.genre)
    }

}