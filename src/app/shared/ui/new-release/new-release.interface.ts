import { IAction } from "../../common/action/action.interface";
import { ICard } from "../../common/card/card.interface";

export interface INewReleaseItem {
    card: ICard;
    url: string;
    duration: string;
    genres: string[];
    actions: IAction[];
}

export interface INewRelease {
    items: INewReleaseItem[]
}