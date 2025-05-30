export type MetaType = {
    [key: string]: string | number;
}

export interface ICarouselItems {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    actions: ICarouselAction[];
    meta? : MetaType;
}

export interface ICarouselAction {
    label: string;
    url: string;
    buttonType: "outlined" | "filled";
    icon?: string;
}

export interface ICarousel {
    items: ICarouselItems[];
}