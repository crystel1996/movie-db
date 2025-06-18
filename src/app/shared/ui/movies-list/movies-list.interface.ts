import { IAction } from "../../common/action/action.interface";
import { ICard } from "../../common/card/card.interface";

export interface IMoviesListItem {
    url: string;
    card: ICard;
    releaseDate: Date;
    genres: string[];
    actions: IAction[]
}

export interface IMoviesList {
    items: IMoviesListItem[]
}