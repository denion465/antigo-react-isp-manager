import { Customer } from './../customer.model';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = {
    firstName: null,
    lastName: null,
    age: null,
    email: null
  }

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

  submitCustomer(): void {
    this.customersService.createCustomer(this.customer)
    .subscribe(() => {
      alert("Sucess to create Customer")
    }, (err) => {
        console.log(err)
    } )
  }

  

}
