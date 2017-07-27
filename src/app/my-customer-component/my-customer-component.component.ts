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
public show: boolean = false;
public customers:Customer;
  constructor(private _customerService:CustomerService)
  {
  	this.title="Lista de Clientes"
  	this.customers=this._customerService.getCustomers();
  }

  ngOnInit() {

  }

  OnDelete(id){
    this._customerService.deleteCustomer(id);
    this.customers=this._customerService.getCustomers();
  }
  ChangeShow($id){
    this.show=$id;
  }

}
