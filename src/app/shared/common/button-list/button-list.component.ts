import { Component, Input } from "@angular/core";
import { IButtonList, IButtonListItem } from "./button-list.interface";
import { DEFAULT_BUTTON_LIST } from "./button-list.constants";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'movies-button-list',
    templateUrl: './button-list.component.html',
    styleUrls: ['./button-list.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ]
})
export class ButtonListComponent {
    @Input() input: IButtonList = DEFAULT_BUTTON_LIST;

    selectLabel(item: IButtonListItem) {
        this.input.selectedItem = item;
        this.input.onSelectedItem && this.input.onSelectedItem.emit(item)
    }

}