import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { RenderMode } from '@angular/ssr';

export const moviesRoutes: Routes = [
    {title: 'Movies', path: 'movies', component: MoviesComponent},
    {
        title: 'Movies detail',
        path: 'movies/:id', 
        component: MoviesDetailComponent,
        data: {
            renderMode: RenderMode.Server
        }
    }
];