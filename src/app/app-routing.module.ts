import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewBillComponent } from './components/create-new-bill/create-new-bill.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BillingComponent } from './components/billing/billing.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'createBill', component: CreateNewBillComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'customerProfile', component: CustomerProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
