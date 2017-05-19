import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CustomerService} from '../services/customer.service';
@Component({
  selector: 'app-my-customer-edit',
  templateUrl: './my-customer-edit.component.html',
  styleUrls: ['./my-customer-edit.component.css'],
  providers:[CustomerService]
})
export class MyCustomerEditComponent implements OnInit {
	public title:string;
	public id:number;
 	public customer:Customer;
  	public customers:Array<{id:number,name: string,lastname:string, dni: string, email:string,phone:string,address:string}>;
  
    constructor(private _customerService:CustomerService,private _route:ActivatedRoute,private _router:Router) 
    {
    	this.customers=this._customerService.getCustomers();
    }

    ngOnInit() 
	{
	  	this.getCustomer();
	  	console.log(this.customer);
	}

	getCustomer()
	{
		this._route.params.forEach((params:Params)=>{
			let id=params['id'];
			this.customer=this._customerService.viewCustomer(id);
		});
	}

	public onSubmit()
	{	
	    this._customerService.editCustomer(this.customer);
	}

}
