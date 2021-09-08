import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPendapatanComponent } from './dashboard-pendapatan.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UIModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardPendapatanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardPendapatanComponent,
      },
    ]),
    ...UIModule,
    SharedModule,
  ],

  bootstrap: [DashboardPendapatanComponent],
})
export class DashboardPendapatanModule {}