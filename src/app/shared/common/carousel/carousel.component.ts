import { Component, Input } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { ICarousel, MetaType } from "./carousel.interface";
import { CommonModule } from "@angular/common";
import { DEFAULT_CAROSUEL_VALUES } from "./carousel.constant";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "movies-carousel",
    templateUrl: "./carousel.component.html",
    styleUrls: ["./carousel.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class CarouselComponent {
    @Input() props: ICarousel = DEFAULT_CAROSUEL_VALUES;

    selectedIndex: number = 0

    getMetaKeys(meta: MetaType): string[] {
        return Object.keys(meta);
    }
}