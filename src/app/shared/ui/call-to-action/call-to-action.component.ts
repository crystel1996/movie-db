import { Component, Input } from "@angular/core";
import { CarouselComponent } from "../../common/carousel/carousel.component";
import { DEFAULT_CAROSUEL_VALUES } from "../../common/carousel/carousel.constant";
import { ICarousel } from "../../common/carousel/carousel.interface";

@Component({
    selector: "movies-call-to-action",
    templateUrl: "./call-to-action.component.html",
    styleUrls: ["./call-to-action.component.scss"],
    standalone: true,
    imports: [CarouselComponent]
})
export class CallToActionComponent {
    @Input() carouselMovies: ICarousel = DEFAULT_CAROSUEL_VALUES;
}