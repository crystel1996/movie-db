import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICtaState } from './cta.reducer';
import { ICarouselItems } from '../../../shared/common/carousel/carousel.interface';

export const selectCtaState = createFeatureSelector<ICtaState>('cta');

export const selectCta = createSelector(selectCtaState, (state: ICtaState):ICarouselItems[] => state.cta);
export const selectCtaLoading = createSelector(selectCtaState, state => state.loading);
export const selectCtaError = createSelector(selectCtaState, state => state.error);