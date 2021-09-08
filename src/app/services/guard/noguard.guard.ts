import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(private route: Router, private authService: AuthService) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthenticated = this.authService.currentUserValue;

        if (!isAuthenticated) {
            return true;
        } else {
            this.route.navigateByUrl("/beranda", {
                replaceUrl: true
            });

            return false;
        }
       
    }
}
