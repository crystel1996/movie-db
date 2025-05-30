import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";
import { CallToActionComponent } from "../../shared/ui/call-to-action/call-to-action.component";
import { ICarousel } from "../../shared/common/carousel/carousel.interface";

@Component({
    selector: "movies-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [
        MainLayoutComponent,
        CallToActionComponent
    ],
})
export class HomeComponent {

    carouselMovies: ICarousel = {
        items: [
            {
                id: "1",
                title: "Inception",
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
                imageUrl: "https://placeholderimage.eu/api/800/600",
                actions: [
                    { label: "Watch Now", url: "/watch/inception", buttonType: "filled", icon: "play_arrow" },
                    { label: "Watch later", url: "/movies/inception", buttonType: "outlined", icon: "watch_later" }
                ]
            },
            {
                id: "2",
                title: "The Dark Knight",
                description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                imageUrl: "https://placeholderimage.eu/api/800/600",
                actions: [
                    { label: "Watch Now", url: "/watch/inception", buttonType: "filled", icon: "play_arrow" },
                    { label: "Watch later", url: "/movies/inception", buttonType: "outlined", icon: "watch_later" }
                ]
            }
        ],
    }

}