import { createReducer, on } from "@ngrx/store";
import * as RecommendationActions from './recommendation.action';
import { IRecommendationItem } from "../../../shared/ui/recommendation/recommendation.interface";

export interface IRecommendationState {
    recommendations: IRecommendationItem[];
    loading: boolean;
    error: any;
}

export const initialState: IRecommendationState = {
    recommendations: [],
    loading: false,
    error: null
}

export const recommendationReducer = createReducer(
    initialState,
    on(RecommendationActions.loadRecommendation, state => ({...state, loading: true})),
    on(RecommendationActions.loadRecommendationSuccess, (state, { recommendations }) => ({
        ...state,
        recommendations,
        loading: false,
        error: null
    })),
    on(RecommendationActions.loadRecommendationFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
)