import { NgModule } from "@angular/core";
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../services/guard/auth.guard";
import { MiscRoute } from "./misc/misc.routing";
import { PagesComponent } from "./pages.component";


export const routes: Routes = [
  ...MiscRoute,
  {
    path: "pages",
    // loadChildren: () => import("./pages.module").then((m) => m.PagesModule),
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard-pelayanan",
        loadChildren: () => import("./dashboard/dashboard-pelayanan/dashboard-pelayanan.module").then(m => m.DashboardPelayananModule),
        data: {
          title: "Dashboard Pelayanan",
          isShowHeader: false,
        },
      },
      {
        path: "dashboard-sdm",
        loadChildren: () => import("./dashboard/dashboard-sdm/dashboard-sdm.module").then(m => m.DashboardSdmModule),
        data: {
          title: "Dashboard SDM",
          isShowHeader: false,
        },
      },
      {
        path: "dashboard-persediaan",
        loadChildren: () => import("./dashboard/dashboard-persediaan/dashboard-persediaan.module").then(m => m.DashboardPersediaanModule),
        data: {
          title: "Dashboard Pelayanan",
          isShowHeader: false,
        },
      },
      {
        path: "dashboard-pendapatan",
        loadChildren: () => import("./dashboard/dashboard-pendapatan/dasboard-pendapatan.module").then(m => m.DashboardPendapatanModule),
        data: {
          title: "Dashboard Pelayanan",
          isShowHeader: false,
        },
      }
    ]
  },
];

const config: ExtraOptions = {
  // useHash: true,
  // paramsInheritanceStrategy: "always",
  // scrollPositionRestoration: "enabled",
  // preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
