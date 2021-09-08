import { NgModule } from "@angular/core";
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NoAuthGuard } from '../services/guard/noguard.guard';

export const AuthRoute: Routes = [
  {
    path: "login",
    loadChildren: () => import("./auth.module").then((m) => m.LoginModule),
    canActivate: [NoAuthGuard],
    data: {
      title: "Login",
      tag: 'login home',
      isShowHeader: false,
    },
  },
];

export const routes: Routes = [

  ...AuthRoute,
];

const config: ExtraOptions = {
  useHash: true,
  paramsInheritanceStrategy: "always",
  scrollPositionRestoration: "enabled",
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

