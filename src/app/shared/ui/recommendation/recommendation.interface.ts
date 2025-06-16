import { IAction } from "../../common/action/action.interface";
import { ICard } from "../../common/card/card.interface";

export interface IRecommendationItem {
    card: ICard;
    url: string;
    releaseDate: Date;
    genres: string[];
    actions: IAction[]
}

export interface IRecommendation {
    items: IRecommendationItem[]
}