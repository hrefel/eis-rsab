import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './services/service.module';
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { MatCardModule } from '@angular/material/card';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PagesModule } from './pages/pages.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports :[
    BrowserAnimationsModule,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    MatCardModule,
    PerfectScrollbarModule,
    TuiRootModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ServiceModule.forRoot(),

    AuthModule,
    // DashboardModule
    PagesModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG  
  }],
  bootstrap: [
    AppComponent, 
    // sharedComp.SidebarComponent
  ]
})
export class AppModule { }
