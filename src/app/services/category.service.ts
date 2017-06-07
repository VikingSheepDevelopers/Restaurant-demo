import {Injectable} from '@angular/core';
import {Init} from '../init-category';

@Injectable()
export class CategoryService extends Init{
	constructor(){
		super();
		console.log('CategoryService iniciado...');
		this.load();
	}

	getCategorys(){
		var categorys=JSON.parse(localStorage.getItem('categorys'));
		return categorys;
	}
}