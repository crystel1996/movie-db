import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { IList } from "./list.interface";
import { RouterModule } from "@angular/router";
import { DEFAULT_LIST } from "./list.constants";

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
    @Input() list: IList = DEFAULT_LIST;
}