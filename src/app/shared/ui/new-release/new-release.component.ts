import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CardComponent } from "../../common/card/card.component";
import { INewRelease } from "./new-release.interface";
import { DEFAULT_NEW_RELEASE } from "./new-release.constants";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "movies-new-release",
  templateUrl: "./new-release.component.html",
  styleUrls: ["./new-release.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatButtonModule,
    MatIconModule
  ]
})
export class NewReleaseComponent {
    
  @Input() newRelease: INewRelease = DEFAULT_NEW_RELEASE;
}