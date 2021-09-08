import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return true;
  }
}
