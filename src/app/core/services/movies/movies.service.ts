import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfig } from "../../config/api.config";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(
        private http: HttpClient,
    ) {}

    getMovieByGenreId(id: string) {
        return this.http.get(ApiConfig.movies.byGenreId(id || ''));
    }

    getListMovie() {
        return this.http.get(ApiConfig.movies.list);
    }

}