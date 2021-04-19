import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = {
    name: null,
    lastname: null,
    birth: null,
    email: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitCustomer() {
    if ( !this.customer.name || !this.customer.lastname || !this.customer.birth || !this.customer.email) {
      alert('dados incompletos')
    } else {
      console.log(this.customer)
    }
  }

}
