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
import { IList } from "../../shared/common/list/list.interface";

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

    isMobile = false;
    showMobileMenu = false;

    layoutProperty: ILayoutProperty = {
        navigationLeft: {
            items: [
                {path: "/", label: "Home"},
                {path: "/genres", label: "Genres"},
            ],
            direction:  AlignDirectionEnum.HORIZONTAL
        },
        navigationRight: {
            items: [
                {path: "/movies", label: "Movies"},
                {path: "/login", label: "Login/Signup"},
            ],
            direction:  AlignDirectionEnum.HORIZONTAL
        },
    }

    mergedNavigationList: IList = {
        items: [
            ...this.layoutProperty.navigationLeft.items as any,
            ...this.layoutProperty.navigationRight.items as any
        ],
        direction:  AlignDirectionEnum.VERTICAL
    }

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
            this.isMobile = result.matches;
            this.layoutProperty.navigationLeft.direction = this.isMobile ? AlignDirectionEnum.VERTICAL : AlignDirectionEnum.HORIZONTAL;
            this.layoutProperty.navigationRight.direction = this.isMobile ? AlignDirectionEnum.VERTICAL : AlignDirectionEnum.HORIZONTAL;
            this.mergedNavigationList = {
                items: [
                    ...this.layoutProperty.navigationLeft.items as any,
                    ...this.layoutProperty.navigationRight.items as any
                ],
                direction:  AlignDirectionEnum.VERTICAL
            }
        });
    }

    toggleMobileMenu(): void {
        this.showMobileMenu = !this.showMobileMenu;
    }
}