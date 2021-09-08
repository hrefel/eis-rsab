import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPendapatanModule } from './dashboard-pendapatan/dasboard-pendapatan.module';
import { DashboardPersediaanModule } from './dashboard-persediaan/dashboard-persediaan.module';
import { DashboardSdmModule } from './dashboard-sdm/dashboard-sdm.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    DashboardPendapatanModule,
    DashboardPersediaanModule,
    DashboardSdmModule
  ],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
