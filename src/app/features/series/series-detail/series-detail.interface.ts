import { IVideo } from "../../../shared/common/video/video.interface";
import { IMoviesInformation } from "../../../shared/ui/information/information.interface";
import { ISeriesList } from "../../../shared/ui/series-list/series-list.interface";
import { ISeriesSeasons } from "../../../shared/ui/series-seasons/series-seasons.interface";

export interface ISerieDetail {
    itemVideo: IVideo;
    informations: IMoviesInformation[];
    seasons: ISeriesSeasons;
    otherSeries: ISeriesList;
}