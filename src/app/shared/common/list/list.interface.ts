import { AlignDirectionEnum } from "../../../core/utils/enum/align-direction.enum";

export interface IListItem {
    id?: string | number;
    label: string;
    path?: string;
    icon?: string;
    customClass?: string;
}

export interface IList {
    items: IListItem[];
    direction: AlignDirectionEnum;
    customClass?: string;
}