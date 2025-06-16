import { Component } from "@angular/core";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'movies-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    imports: [
        MatProgressSpinnerModule
    ]
})
export class LoadingComponent {}