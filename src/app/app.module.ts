import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OverviewComponent } from './overview/overview.component';

const appRoutes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
