import { createReducer, on } from "@ngrx/store";
import * as CtaActions from './cta.action';
import { ICarouselItems } from "../../../shared/common/carousel/carousel.interface";

export interface ICtaState {
    cta: ICarouselItems[];
    loading: boolean;
    error: any;
}

export const initialState: ICtaState = {
    cta: [],
    loading: false,
    error: null
}

export const ctaReducer = createReducer(
    initialState,
    on(CtaActions.loadCta, state => ({...state, loading: true})),
    on(CtaActions.loadCtaSuccess, (state, { cta }) => ({
        ...state,
        cta,
        loading: false,
        error: null
    })),
    on(CtaActions.loadCtaFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
)