import { ICard } from "../../common/card/card.interface";

export interface IRecommendationItem {
    card: ICard;
    url: string;
    duration: string;
    genres: string[];
}

export interface IRecommendation {
    items: IRecommendationItem[]
}