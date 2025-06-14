import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tmdbToken = environment.tmdbToken;
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${tmdbToken}`,
                Accept: 'application/json',
            }
        });
        return next.handle(cloned);
    }
}