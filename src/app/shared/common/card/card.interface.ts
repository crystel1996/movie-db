export interface ICardActions {
    label: string;
    buttonAction?: () => void;
    href?: string;
    icon?: string;
}

export interface ICard {
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    actions?: ICardActions[]
    onlyImage?: boolean;
}