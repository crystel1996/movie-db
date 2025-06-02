import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { GenreListComponent } from "../../shared/ui/genre-list/genre-list.component";
import { AlignDirectionEnum } from "../../core/utils/enum/align-direction.enum";
import { SectionTitleComponent } from "../../shared/common/title/title.component";
import { IGenreSectionTitle } from "./genre.interface";
import { IList } from "../../shared/common/list/list.interface";

@Component({
    selector: 'movies-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.scss'],
    imports: [
    MainLayoutComponent,
    GenreListComponent,
    SectionTitleComponent
]
})
export class GenreComponent {
    sectionTitle: IGenreSectionTitle = {
        list: "Tous les genres"
    }
    genreList: IList = {
        items: [
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
        customClass: "nav-list"
    }
} 