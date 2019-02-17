import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: OrdersComponent },
      { path: 'movimento', component: OrdersComponent },
      { path: 'relatorios', component: OrdersComponent },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    OrdersComponent,
    DashboardComponent
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
