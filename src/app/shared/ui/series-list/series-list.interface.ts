import { ICard } from "../../common/card/card.interface";

export interface ISeriesListItem {
    url: string;
    card: ICard;
    duration: string;
    genres: string[];
}

export interface ISeriesList {
    items: ISeriesListItem[]
}