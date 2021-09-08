import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guard/auth.guard";
import { NoAuthGuard } from "./guard/noguard.guard";
import { HttpService } from "./http.service";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { HttpConfigInterceptor } from "./interceptors/http.interceptor";
// import { SseService } from "./server-sent-event.service";
import { RoleGuard } from "./guard/role.guard";
import { AlertService } from "./alert.service";
import { SidebarService } from "./sidebar.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule],
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ServiceModule,
      providers: [
        HttpService,
        AuthService,
        CookieService,
        AuthGuard,
        NoAuthGuard,
        RoleGuard,
        AlertService,
        SidebarService,
        // SseService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpConfigInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: JWTInterceptor,
        //   multi: true,
        // },
      ],
    };
  }
}
