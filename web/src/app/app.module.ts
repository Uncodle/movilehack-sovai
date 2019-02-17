import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { LoginComponent } from './dashboard-client/login/login.component';
import { NavComponent } from './dashboard-client/nav/nav.component';
import { OrdersComponent } from './dashboard-client/orders/orders.component';

const appRoutes = [
  { path: '', component: AppComponent },
  { path: 'admin/dashboard', component: DashboardClientComponent },
  { path: 'admin/login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardClientComponent,
    LoginComponent,
    DashboardClientComponent,
    NavComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
