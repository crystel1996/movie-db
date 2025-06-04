import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IMoviesInformation } from "./information.interface";

@Component({
    selector: 'movies-information',
    standalone: true,
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
    imports: [
        CommonModule
    ]
})
export class InformationComponent {
    @Input() informations: IMoviesInformation[] = []
}