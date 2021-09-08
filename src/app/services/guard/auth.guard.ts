import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this.authService.currentUserValue;

    if (isAuthenticated) {
      return true;
    } else {
      this.route.navigateByUrl("/login", {
        replaceUrl: true,
      });

      return false;
    }
  }
}
