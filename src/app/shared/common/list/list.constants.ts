import { AlignDirectionEnum } from "../../../core/utils/enum/align-direction.enum";
import { IList } from "./list.interface";

export const DEFAULT_LIST: IList = {
    items: [],
    direction: AlignDirectionEnum.HORIZONTAL,
    customClass: ""
}