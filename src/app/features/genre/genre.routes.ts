import { Routes } from '@angular/router';
import { GenreComponent } from './genre.component';
import { GenreDetailFeature as GenreDetailComponent } from './genre-detail/genre-detail.component';
import { RenderMode } from '@angular/ssr';

export const genreRoutes: Routes = [
    {title: 'Genres', path: 'genres', component: GenreComponent},
    {
        title: 'Genre detail', 
        path: 'genres/:id', 
        component: GenreDetailComponent, 
        data: {
             renderMode: RenderMode.Server
        }
    }
];