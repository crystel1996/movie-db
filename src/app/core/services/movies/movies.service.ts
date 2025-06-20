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

    getSimilarMovies(id: string) {
        return this.http.get(ApiConfig.movies.similar(id));
    }

    getMovieById(id: string) {
        return this.http.get(ApiConfig.movies.byId(id))
    }

    getMovieVideo(id: string) {
        return this.http.get(ApiConfig.movies.getVideo(id))
    }

    getMovieSearch(query: string) {
        return this.http.get(ApiConfig.movies.search(query))
    }

}