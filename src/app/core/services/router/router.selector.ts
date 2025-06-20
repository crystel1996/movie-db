import { createSelector } from '@ngrx/store';

export const selectRouter = (state: any) => state.router;

export const selectRouteParam = (param: string) =>
  createSelector(selectRouter, (router) => router?.state?.params?.[param]);