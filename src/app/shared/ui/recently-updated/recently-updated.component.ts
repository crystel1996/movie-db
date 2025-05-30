import { Component, Input } from "@angular/core";
import { IRecentlyUpdated } from "./recently-updated.interface";
import { CardComponent } from "../../common/card/card.component";
import { DEFAULT_RECENTLY_UPDATED } from "./recently-updated.constant";
import { CommonModule } from "@angular/common";

@Component({
  selector: "movies-recently-updated",
  templateUrl: "./recently-updated.component.html",
  styleUrls: ["./recently-updated.component.scss"],
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ]
})
export class RecentlyUpdatedComponent {
  @Input() recentlyUpdated: IRecentlyUpdated = DEFAULT_RECENTLY_UPDATED;
}