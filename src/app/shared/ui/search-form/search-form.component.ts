import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "movies-search-form",
    templateUrl: "./search-form.component.html",
    styleUrls: ["./search-form.component.scss"],
    standalone: true,
    imports: [
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})
export class SearchFormComponent {
    placeholder: string = "Search movie title";

    searchText: string = ""

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const query = params['q'];
            if (query) {
                this.searchText = query;
            }
        });
    }

    onSearch() {
        const query = this.searchText.trim();
        if (query) {
            this.router.navigate(['/search'], {
                queryParams: { q: query }
            });
        }
    }

}