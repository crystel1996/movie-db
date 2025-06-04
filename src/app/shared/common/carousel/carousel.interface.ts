import { IAction } from "../action/action.interface";

export type MetaType = {
    [key: string]: string | number;
}

export interface ICarouselItems {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    actions: IAction[];
    meta? : MetaType;
}

export interface ICarousel {
    items: ICarouselItems[];
}