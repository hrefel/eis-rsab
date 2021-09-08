import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/services/guard/auth.guard";
import { NoAuthGuard } from '../../services/guard/noguard.guard';

export const MiscRoute: Routes = [
  {
    path: "beranda",
    loadChildren: () => import("./misc.module").then((m) => m.BerandaModule),
    canActivate:[AuthGuard],
    data: {
      title: "Beranda",
      isShowHeader: false,
    },
  },
];
