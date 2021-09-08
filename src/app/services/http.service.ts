import {
  HttpClient
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { map } from "rxjs/operators";
import { BASE_URL } from "../shared/url.config";



@Injectable()
export class HttpService {
  header: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  get(url: string) {
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getWithPromise(url: string) {
    return this.http.get(url).toPromise().then(data => {
      console.log('first');
      return data;
    })
  }

  edit(url, data) {
    return this.http.put(url, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  save(url, data) {
    return this.http.post(url, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  login(data) {
    return this.http.post(BASE_URL.authLogin, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  openReporting(url) {
    window.open(url, "_blank");
  }

  logout() {
    this.cookieService.deleteAll();
    location.replace("login");
  }
}
