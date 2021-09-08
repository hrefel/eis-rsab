import { NgModule } from "@angular/core";
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../../services/guard/auth.guard';

export const routes: Routes = [
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
export class DashboardRoutingModule { }

