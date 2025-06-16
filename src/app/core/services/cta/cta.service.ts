import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiConfig } from "../../config/api.config";

@Injectable({
    providedIn: 'root'
})
export class CtaService {
    constructor(private http: HttpClient) {}

    getCta() {
        return this.http.get(ApiConfig.cta.list);
    }

}