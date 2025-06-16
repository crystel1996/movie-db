import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfig } from "../../config/api.config";

@Injectable({
    providedIn: 'root'
})
export class RecommendationService {
    constructor(private http: HttpClient) {}

    getRecommendations() {
        return this.http.get(ApiConfig.recommendation.list);
    }

}