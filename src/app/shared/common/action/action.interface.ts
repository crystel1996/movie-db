export interface IAction {
    label: string;
    url?: string;
    buttonType: string;
    icon?: string;
    click?: () => void;
}