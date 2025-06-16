import { createReducer, on } from "@ngrx/store";
import * as NewReleaseActions from './new-release.action';
import { INewReleaseItem } from "../../../shared/ui/new-release/new-release.interface";

export interface INewReleaseState {
    newReleases: INewReleaseItem[];
    loading: boolean;
    error: any;
}

export const initialState: INewReleaseState = {
    newReleases: [],
    loading: false,
    error: null
}

export const newReleaseReducer = createReducer(
    initialState,
    on(NewReleaseActions.loadNewReleases, state => ({...state, loading: true})),
    on(NewReleaseActions.loadNewReleasesSuccess, (state, { newReleases }) => ({
        ...state,
        newReleases,
        loading: false,
        error: null
    })),
    on(NewReleaseActions.loadNewReleasesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
)