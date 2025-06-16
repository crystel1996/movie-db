import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INewReleaseState } from './new-release.reducer';
import { INewReleaseItem } from '../../../shared/ui/new-release/new-release.interface';

export const selectNewReleaseState = createFeatureSelector<INewReleaseState>('newReleases');

export const selectNewReleases = createSelector(selectNewReleaseState, (state: INewReleaseState):INewReleaseItem[] => state.newReleases);
export const selectNewReleasesLoading = createSelector(selectNewReleaseState, state => state.loading);
export const selectNewReleasesError = createSelector(selectNewReleaseState, state => state.error);