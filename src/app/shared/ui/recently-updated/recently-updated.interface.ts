import { ICard } from "../../common/card/card.interface"

export interface IRecentlyUpdatedItem {
    card: ICard;
    url: string;
    lastEpisode: string;
    updatedAt: Date;
}

export interface IRecentlyUpdated {
    items: IRecentlyUpdatedItem[]
}