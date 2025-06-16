import { ActionReducerMap } from '@ngrx/store';
import { genreReducer, IGenreState } from './core/services/genre/genre.reducer';
import { INewReleaseState, newReleaseReducer } from './core/services/new-release/new-release.reducer';
import { IRecommendationState, recommendationReducer } from './core/services/recommendation/recommendation.reducer';

export interface AppState {
  genres: IGenreState;
  newReleases: INewReleaseState;
  recommendations: IRecommendationState
}

export const appReducers: ActionReducerMap<AppState> = {
  genres: genreReducer,
  newReleases: newReleaseReducer,
  recommendations: recommendationReducer
};