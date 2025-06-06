import { IVideo } from "../../../shared/common/video/video.interface";
import { IMoviesInformation } from "../../../shared/ui/information/information.interface";
import { ISeriesList } from "../../../shared/ui/series-list/series-list.interface";

export interface ISerieDetail {
    itemVideo: IVideo;
    informations: IMoviesInformation[];
    otherSeries: ISeriesList;
}