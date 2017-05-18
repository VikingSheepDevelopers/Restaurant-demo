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
}