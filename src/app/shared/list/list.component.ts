import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { IListItem } from "./list.interface";
import { RouterModule } from "@angular/router";
import { AlignDirectionEnum } from "../../core/utils/enum/align-direction.enum";

@Component({
    selector: "movies-list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"],
    standalone: true,
    imports: [
        MatListModule,
        MatIconModule,
        CommonModule,
        RouterModule
    ],
})
export class ListComponent {
    @Input() items: IListItem[] = [];
    @Input() direction: AlignDirectionEnum = AlignDirectionEnum.HORIZONTAL;

}