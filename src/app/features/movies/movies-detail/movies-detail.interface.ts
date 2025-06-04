import { IVideo } from "../../../shared/common/video/video.interface";
import { IMoviesInformation } from "../../../shared/ui/information/information.interface";
import { IMoviesList } from "../../../shared/ui/movies-list/movies-list.interface";

export interface IMovieDetail {
    itemVideo: IVideo;
    informations: IMoviesInformation[];
    otherMovies: IMoviesList
}