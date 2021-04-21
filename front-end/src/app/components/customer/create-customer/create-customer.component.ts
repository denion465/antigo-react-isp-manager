import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomersService } from '../../../services/customers.service';

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

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

  submitCustomer() {
    if ( !this.customer.name || !this.customer.lastname || !this.customer.birth || !this.customer.email) {
      alert('dados incompletos')
    } else if (this.customer) {
      this.customersService.postCustomer(this.customer)
      .subscribe(() => {
        console.log("ok")
      })
    }

    }
  

}
