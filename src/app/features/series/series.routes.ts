import { Routes } from '@angular/router';
import { SeriesComponent } from './series.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { RenderMode } from '@angular/ssr';

export const seriesRoutes: Routes = [
    {title: 'Series', path: 'series', component: SeriesComponent},
    {
        title: 'Series detail',
        path: 'series/:id/:season_id/:series_movies_id', 
        component: SeriesDetailComponent,
        data: {
            renderMode: RenderMode.Server
        }
    }
];