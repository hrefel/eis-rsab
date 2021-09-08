import { NgModule } from "@angular/core";
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MiscRoute } from "./pages/misc/misc.routing";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "beranda",
    pathMatch: "full",
    data: {
      title: "Beranda",
      isShowHeader: false,
      tag: 'beranda home'
    },
  },
  // ...AuthRoute,
  // ...MiscRoute
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
export class AppRoutingModule {}
