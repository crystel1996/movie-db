import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { IAction } from "./action.interface";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'movies-action',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.scss'],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class ActionComponent {
    @Input() actions: IAction[] = []
}