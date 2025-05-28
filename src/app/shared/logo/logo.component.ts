import { Component } from "@angular/core";

@Component({
    selector: "movies-logo",
    templateUrl: "./logo.component.html",
    styleUrls: ["./logo.component.scss"],
    standalone: true,
    imports: [],
})
export class LogoComponent {
    // This component serves as a logo for the application.
    // It can be extended with additional functionality or properties as needed.
    constructor() {}

    logo = "Movie app"

}