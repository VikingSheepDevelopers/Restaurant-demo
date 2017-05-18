import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer";
import {CustomerService} from '../services/customer.service';
@Component({
  selector: 'app-my-customer',
  templateUrl: './my-customer-component.component.html',
  styleUrls: ['./my-customer-component.component.css'],
  providers:[CustomerService]
})
export class MyCustomerComponent implements OnInit {
public title:string;
public customers:Array<{name: string,lastname:string, dni: string, email:string,phone:string,address:string}>;
  constructor(private _customerService:CustomerService) 
  { 
  	this.title="Lista de Clientes"
  	this.customers=this._customerService.getCustomers();
  }

  ngOnInit() {
  	
  }

}
