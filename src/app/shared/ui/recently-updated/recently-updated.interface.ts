import { IAction } from "../../common/action/action.interface";
import { ICard } from "../../common/card/card.interface"

export interface IRecentlyUpdatedItem {
    card: ICard;
    url: string;
    lastEpisode: string;
    updatedAt: Date;
    actions: IAction[]
}

export interface IRecentlyUpdated {
    items: IRecentlyUpdatedItem[]
}