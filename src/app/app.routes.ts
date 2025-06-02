import { Routes } from '@angular/router';
import { homeRoutes } from './features/home/home.routes';
import { genreRoutes } from './features/genre/genre.routes';

export const routes: Routes = [
    ...homeRoutes,
    ...genreRoutes
];
