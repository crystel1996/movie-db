import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { LogoComponent } from "../../shared/logo/logo.component";

@Component({
    selector: "movies-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.scss"],
    standalone: true,
    imports: [
    CommonModule,
    MatToolbarModule,
    LogoComponent
]
})
export class MainLayoutComponent {
    // This component serves as the main layout for the application.
    // It can be extended with additional functionality or properties as needed.
    constructor() {}
}