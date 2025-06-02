import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/home.routes';
import { genreRoutes } from './features/genre/genre.routes';
import { moviesRoutes } from './features/movies/movies.routes';

export const routes: Routes = [
    ...homeRoutes,
    ...genreRoutes,
    ...moviesRoutes
];
