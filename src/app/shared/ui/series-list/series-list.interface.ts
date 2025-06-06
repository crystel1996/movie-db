import { IAction } from "../../common/action/action.interface";
import { ICard } from "../../common/card/card.interface";

export interface ISeriesListItem {
    url: string;
    card: ICard;
    duration: string;
    genres: string[];
    actions: IAction[];
}

export interface ISeriesList {
    items: ISeriesListItem[]
}