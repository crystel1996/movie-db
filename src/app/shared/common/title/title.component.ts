import { Component, Input } from "@angular/core";

@Component({
  selector: "movies-section-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
  standalone: true,
})
export class SectionTitleComponent {
    @Input() title: string = "";
}