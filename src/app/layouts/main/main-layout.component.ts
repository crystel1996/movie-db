import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LogoComponent } from "../../shared/common/logo/logo.component";
import { ListComponent } from "../../shared/common/list/list.component";
import { ILayoutProperty } from "./main-layout.interface";
import { AlignDirectionEnum } from "../../core/utils/enum/align-direction.enum";
import { SearchFormComponent } from "../../shared/ui/search-form/search-form.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "movies-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.scss"],
    standalone: true,
    imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    LogoComponent,
    ListComponent,
    SearchFormComponent
]
})
export class MainLayoutComponent {
    // This component serves as the main layout for the application.
    // It can be extended with additional functionality or properties as needed.
    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
            this.isMobile = result.matches;
            this.layoutProperty.menuItemsDirection = this.isMobile ? AlignDirectionEnum.VERTICAL : AlignDirectionEnum.HORIZONTAL;
        });
    }

    isMobile = false;
    showMobileMenu = false;

    layoutProperty: ILayoutProperty = {
        leftMenuItems: [
            {path: "/", label: "Home"},
            {path: "/genres", label: "Genres"},
            {path: "/country", label: "Country"},
        ],
        rightMenuItems: [
            {path: "/movies", label: "Movies"},
            {path: "/series", label: "Series"},
            {path: "/animation", label: "Animation"},
            {path: "/login", label: "Login/Signup"},
        ],
        menuItemsDirection: AlignDirectionEnum.HORIZONTAL
    }

    toggleMobileMenu(): void {
        this.showMobileMenu = !this.showMobileMenu;
    }
}