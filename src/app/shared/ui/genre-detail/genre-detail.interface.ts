import { ICard } from "../../common/card/card.interface";

export interface IGenreDetailItems {
    url: string;
    card: ICard;
    duration: string;
    genres: string[];
}


export interface IGenreDetail {
    items: IGenreDetailItems[]
}