import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Customer} from "../models/customer";
@Component({
  selector: 'app-my-customer',
  templateUrl: './my-customer-component.component.html',
  styleUrls: ['./my-customer-component.component.css']
})
export class MyCustomerComponent implements OnInit {
public title:string;
public customers:Array<{name: string,lastname:string, dni: string, email:string,phone:string,address:string}>;
  constructor(public localStorageService: LocalStorageService) 
  { 
  	this.title="Lista de Clientes"
  	this.customers=[{name: "Peter",lastname:"Griffin", dni: '855656',email:"peter@gmail.com",phone:"04215414",address:"Quahock"},
      {name: "Bryan",lastname:"Griffin", dni: '45465',email:"bryan@gmail.com",phone:"0121545",address:"Quahock"},
      {name: "Stui",lastname:"Griffin", dni: '5544554',email:"stui@gmail.com",phone:"054854",address:"Quahock"},
      {name: "Lois",lastname:"Griffin", dni: '5545454',email:"lois@gmail.com",phone:"017747887",address:"Quahock"}]
  }

  ngOnInit() {
  	
  }

}
