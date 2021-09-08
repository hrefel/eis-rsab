import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { UIModule } from '../shared';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavigasiComponent } from './misc/navigasi/navigasi.component';



@NgModule({
  declarations: [
    PagesComponent,
    // HeaderComponent,
    NavigasiComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ...UIModule,
    SharedModule,
    DashboardModule
  ],
  bootstrap:[]
})
export class PagesModule { }
