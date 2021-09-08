import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import * as app from ".";
import { SharedModule } from "../../shared/shared.module";
import { UIModule } from "../../shared";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [app.BerandaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: app.BerandaComponent,
      },
    ]),
    ...UIModule,
    SharedModule,
  ],

  bootstrap: [app.BerandaComponent],
})
export class BerandaModule {}

