import { AlignDirectionEnum } from "../../core/utils/enum/align-direction.enum";
import { IListItem } from "../../shared/list/list.interface";

export interface ILayoutProperty {
    leftMenuItems: IListItem[];
    rightMenuItems: IListItem[];
    menuItemsDirection: AlignDirectionEnum
}