import { Component } from "@angular/core";
import { MainLayoutComponent } from "../../layouts/main/main-layout.component";

@Component({
    selector: "movies-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [MainLayoutComponent],
})
export class HomeComponent {}