import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfig } from "../../config/api.config";

@Injectable({
    providedIn: 'root'
})
export class GenreService {

    constructor(private http: HttpClient) {}

    getGenres() {
        return this.http.get(ApiConfig.genre.list)
    }

}