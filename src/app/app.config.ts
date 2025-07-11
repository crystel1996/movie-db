import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { provideEffects } from '@ngrx/effects';
import { GenreEffects } from './core/services/genre/genre.effect';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/Auth.interceptor';
import { NewReleaseEffects } from './core/services/new-release/new-release.effect';
import { RecommendationEffect } from './core/services/recommendation/recommendation.effect';
import { CtaEffects } from './core/services/cta/cta.effect';
import { MovieEffects } from './core/services/movies/movies.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    ),
    provideStore(appReducers),
    provideEffects(
      GenreEffects, 
      NewReleaseEffects, 
      RecommendationEffect,
      CtaEffects,
      MovieEffects
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
