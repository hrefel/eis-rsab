import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import * as app from ".";
import { SharedModule } from "../shared/shared.module";
import { UIModule } from "../shared";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

@NgModule({
  declarations: [app.LoginComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: app.LoginComponent,
      },
    ]),
    ...UIModule,
    SharedModule,
  ],

  bootstrap: [app.LoginComponent],
})
export class LoginModule { }

