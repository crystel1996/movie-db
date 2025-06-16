import { createAction, props } from '@ngrx/store';

export const loadNewReleases = createAction('[New Releases] Load New Releases');
export const loadNewReleasesSuccess = createAction('[New Releases] Load New Releases Success', props<{ newReleases: any[] }>());
export const loadNewReleasesFailure = createAction('[New Releases] Load New Releases Failure', props<{ error: any }>());