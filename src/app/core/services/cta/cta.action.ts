import { createAction, props } from '@ngrx/store';

export const loadCta = createAction('[Cta] Load Cta');
export const loadCtaSuccess = createAction('[Cta] Load Cta Success', props<{ cta: any[] }>());
export const loadCtaFailure = createAction('[Cta] Load Cta Failure', props<{ error: any }>());