import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ICard } from "./card.interface";
import { CARD_DEFAULT } from "./card.constant";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "movies-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
    standalone: true,
    imports: [
        MatCardModule,
        MatIconModule,
        CommonModule
    ]
})
export class CardComponent {
    @Input() card: ICard = CARD_DEFAULT;
}