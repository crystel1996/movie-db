import { createAction, props } from '@ngrx/store';

export const loadRecommendation = createAction('[Recommendation] Load Recommendation');
export const loadRecommendationSuccess = createAction('[Recommendation] Load Recommendation Success', props<{ recommendations: any[] }>());
export const loadRecommendationFailure = createAction('[Recommendation] Load Recommendation Failure', props<{ error: any }>());