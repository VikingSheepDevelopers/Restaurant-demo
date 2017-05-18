import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CustomerService} from '../services/customer.service';
@Component({
  selector: 'app-my-customer-add',
  templateUrl: './my-customer-add.component.html',
  styleUrls: ['./my-customer-add.component.css'],
  providers:[CustomerService]
})
export class MyCustomerAddComponent implements OnInit {
 	public title:string;
 	public customer:Customer;
  public customers:Array<{name: string,lastname:string, dni: string, email:string,phone:string,address:string}>;
  
  constructor(private _customerService:CustomerService) {
    this.customers=this._customerService.getCustomers();
   }

  ngOnInit() {
  	this.customer=new Customer("","","","","","");
  	console.log(this.customer);
  }

  public onSubmit(){
    this._customerService.addCustomer(this.customer);
  }

}
