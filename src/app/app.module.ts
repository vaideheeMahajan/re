import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';
import { BillingComponent } from './components/billing/billing.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CreateMenuComponent } from './components/billing/create-menu.component';
import { CreateNewBillComponent } from './components/create-new-bill/create-new-bill.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BillingComponent,
    CustomerProfileComponent,
    CreateMenuComponent,
    CreateNewBillComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AgGridModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [CreateMenuComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
