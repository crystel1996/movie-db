import { IButtonList, IButtonListItem } from "../../common/button-list/button-list.interface";
import { ISeriesListItem } from "../series-list/series-list.interface";

export interface ISeriesListSeasons {
    id: string;
    label: string;
}

export interface ISeriesItemsSeasons {
    seasonId: string | number;
    series: ISeriesListItem[]
}

export interface ISeriesSeasons {
    seasons: IButtonListItem[];
    items: ISeriesItemsSeasons[]
}