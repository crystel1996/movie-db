import { EventEmitter } from "@angular/core";


export interface IButtonListItem {
    id: string | number;
    label: string;
}

export interface IButtonList {
    selectedItem?: IButtonListItem;
    defaultLabel: string;
    labels: IButtonListItem[];
    onSelectedItem?: EventEmitter<IButtonListItem>;
}