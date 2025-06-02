import { IMoviesList } from "../../shared/ui/movies-list/movies-list.interface";

export interface IMoviesFeature {
    genre: string;
    movies: IMoviesList
}