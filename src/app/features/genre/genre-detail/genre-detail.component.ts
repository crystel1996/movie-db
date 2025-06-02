import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { MainLayoutComponent } from "../../../layouts/main/main-layout.component";
import { SectionTitleComponent } from "../../../shared/common/title/title.component";
import { IGenreDetail } from "../../../shared/ui/genre-detail/genre-detail.interface";
import { GenreDetailComponent } from "../../../shared/ui/genre-detail/genre-detail.component";
import { GenreListComponent } from "../../../shared/ui/genre-list/genre-list.component";
import { AlignDirectionEnum } from "../../../core/utils/enum/align-direction.enum";
import { IList } from "../../../shared/common/list/list.interface";

@Component({
    selector: 'movies-genre-detail-feature',
    templateUrl: './genre-detail.component.html',
    styleUrls: ['./genre-detail.component.scss'],
    standalone: true,
    imports: [
        MainLayoutComponent,
        SectionTitleComponent,
        GenreDetailComponent,
        GenreListComponent
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
            ],
    };

    genreList: IList ={
        items:  [
                { path: '/genres/10759', label: "Action & Adventure" },
                { path: '/genres/16', label: "Animation" },
                { path: '/genres/35', label: "Comedy" },
                { path: '/genres/80', label: "Crime" },
                { path: '/genres/99', label: "Documentary" },
                { path: '/genres/18', label: "Drama" },
                { path: '/genres/10751', label: "Family" },
                { path: '/genres/10762', label: "Kids" },
                { path: '/genres/9648', label: "Mystery" },
                { path: '/genres/10763', label: "News" },
                { path: '/genres/10764', label: "Reality" },
                { path: '/genres/10765', label: "Sci-Fi & Fantasy" },
                { path: '/genres/10766', label: "Soap" },
                { path: '/genres/10767', label: "Talk" },
                { path: '/genres/10768', label: "War & Politics" },
                { path: '/genres/37', label: "Western" }
            ],
        direction: AlignDirectionEnum.HORIZONTAL,
        customClass: 'nav-list'
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