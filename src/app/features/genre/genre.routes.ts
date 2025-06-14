import { Routes } from '@angular/router';
import { GenreComponent } from './genre.component';
import { GenreDetailFeature as GenreDetailComponent } from './genre-detail/genre-detail.component';
import { RenderMode } from '@angular/ssr';
import { GenreEffects } from '../../core/services/genre/genre.effect';
import { provideEffects } from '@ngrx/effects';

export const genreRoutes: Routes = [
    {
        title: 'Genres', 
        path: 'genres', 
        component: GenreComponent,
        providers: [
            provideEffects(GenreEffects)
        ]
    },
    {
        title: 'Genre detail', 
        path: 'genres/:id', 
        component: GenreDetailComponent, 
        data: {
             renderMode: RenderMode.Server
        }
    }
];