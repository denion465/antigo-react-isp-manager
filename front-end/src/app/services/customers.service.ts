import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  API: string = 'http://localhost:4100'

  constructor(private http: HttpClient) { }



}
