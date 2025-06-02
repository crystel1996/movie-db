import { ICard } from "../../common/card/card.interface";
import { IList } from "../../common/list/list.interface";

export interface IGenreDetailItems {
    url: string;
    card: ICard;
    duration: string;
    genres: string[];
}


export interface IGenreDetail {
    items: IGenreDetailItems[];
}