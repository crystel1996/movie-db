import { ICard } from "../../common/card/card.interface";

export interface IMoviesListItem {
    url: string;
    card: ICard;
    duration: string;
    genres: string[];
}

export interface IMoviesList {
    items: IMoviesListItem[]
}