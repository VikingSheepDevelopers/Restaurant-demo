import {Injectable} from '@angular/core';
import {Init} from '../init-customer';

@Injectable()
export class CustomerService extends Init{
	constructor(){
		super();
		console.log('CustomerService iniciado...');
		this.load();
	}

	getCustomers(){
		var customers=JSON.parse(localStorage.getItem('customers'));
		return customers;
	}

	addCustomer(newCustomer){
		var customers=JSON.parse(localStorage.getItem('customers'));
		customers.push(newCustomer);
		localStorage.setItem('customers',JSON.stringify(customers));
	}

	viewCustomer(id){
		var mycustomer;
		var customers=JSON.parse(localStorage.getItem('customers'));
		for(var customer of customers){
			if(customer.id==id){
				mycustomer=customer;
			}
		}
		return mycustomer;
	}

	editCustomer(changeCustomer){
		var customers=JSON.parse(localStorage.getItem('customers'));
		for(var customer of customers){
			if(customer.id==changeCustomer.id){
				customer.name=changeCustomer.name;
				customer.lastname=changeCustomer.lastname;
				customer.dni=changeCustomer.dni;
				customer.email=changeCustomer.email;
				customer.phone=changeCustomer.phone;
				customer.address=changeCustomer.address;
			}
		}
		localStorage.setItem('customers',JSON.stringify(customers));
	}
}