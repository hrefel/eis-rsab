import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { AlertService } from "../alert.service";



@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
  constructor(private cookie: CookieService, private alert: AlertService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let message: any = 'Koneksi Terputus';
        let title: any = 'Error';

        console.error(error);
        this.alert.error(error.error.messages, 'topRight', `${error.status}`);

        return throwError(error);
      })
    );
  }
}