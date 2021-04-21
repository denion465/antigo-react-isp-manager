import { Customer } from './../components/customer/customer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  API: string = 'http://localhost:4100'
  apiPost: string = 'http://localhost:4100/customers/add'

  constructor(private http: HttpClient) { }

  postCustomer(data: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.apiPost, data)
    
  }

}
