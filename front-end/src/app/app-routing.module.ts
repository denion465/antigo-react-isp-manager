import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { SearchCustomerComponent } from './components/customer/search-customer/search-customer.component';

const routes: Routes = [
  {
    path: "createcustomer",
    component: CreateCustomerComponent
  },
  {
    path: "searchcustomer",
    component: SearchCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
