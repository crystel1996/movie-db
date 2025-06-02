import { Component, Input } from "@angular/core";
import { ListComponent } from "../../common/list/list.component";
import { DEFAULT_GENRE_LIST } from "./genre-list.constants";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { AlignDirectionEnum } from "../../../core/utils/enum/align-direction.enum";
import { IList } from "../../common/list/list.interface";

@Component({
    selector: 'movies-genre-list',
    templateUrl: './genre-list.component.html',
    styleUrls: ['./genre-list.component.scss'],
    standalone: true,
    imports: [
        ListComponent
    ]
})
export class GenreListComponent {
   @Input() genreList: IList = DEFAULT_GENRE_LIST;

   constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
            this.genreList.direction = result.matches ? AlignDirectionEnum.VERTICAL : AlignDirectionEnum.HORIZONTAL;
        });
    }
    
}