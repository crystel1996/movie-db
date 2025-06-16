import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfig } from "../../config/api.config";

@Injectable({
    providedIn: 'root'
})
export class NewReleaseService {
    constructor(private http: HttpClient) {}

    getNewReleases() {
        return this.http.get(ApiConfig.newRelease.list)
    }

}