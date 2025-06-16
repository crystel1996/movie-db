import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRecommendationState } from './recommendation.reducer';
import { IRecommendationItem } from '../../../shared/ui/recommendation/recommendation.interface';

export const selectRecommendationState = createFeatureSelector<IRecommendationState>('recommendations');

export const selectRecommendations = createSelector(selectRecommendationState, (state: IRecommendationState):IRecommendationItem[] => state.recommendations);
export const selectRecommendationsLoading = createSelector(selectRecommendationState, state => state.loading);
export const selectRecommendationsError = createSelector(selectRecommendationState, state => state.error);