import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { RenderMode } from '@angular/ssr';
import { SearchResultComponent } from '../search/search-result.component';

export const moviesRoutes: Routes = [
    {title: 'Movies', path: 'movies', component: MoviesComponent},
    {title: 'Movies', path: 'search', component: SearchResultComponent},
    {
        title: 'Movies detail',
        path: 'movies/:id', 
        component: MoviesDetailComponent,
        data: {
            renderMode: RenderMode.Server
        }
    }
];