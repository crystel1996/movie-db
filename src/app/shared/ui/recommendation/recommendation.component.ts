import { Component, Input } from "@angular/core";
import { IRecommendation } from "./recommendation.interface";
import { DEFAULT_RECOMMENDATION } from "./recommendation.constants";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../common/card/card.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ActionComponent } from "../../common/action/action.component";

@Component({
  selector: "movies-recommendation",
  templateUrl: "./recommendation.component.html",
  styleUrls: ["./recommendation.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatIconModule,
    MatButtonModule,
    ActionComponent
]
})
export class RecommendationComponent {
    @Input() recommendation: IRecommendation = DEFAULT_RECOMMENDATION;
}