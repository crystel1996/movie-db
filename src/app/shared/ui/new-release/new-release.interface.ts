import { ICard } from "../../common/card/card.interface";

export interface INewReleaseItem {
    card: ICard;
    url: string;
    duration: string;
    genres: string[];
}

export interface INewRelease {
    items: INewReleaseItem[]
}