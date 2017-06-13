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

	deleteCategory(id){
		var categorys=JSON.parse(localStorage.getItem('categorys'));
		for(var category in categorys){
			if(categorys[category].id==id){
				categorys.splice(category,1);
			}
		}
		localStorage.setItem('categorys',JSON.stringify(categorys));
	}

	addCategory(newCategory){
		var categorys=JSON.parse(localStorage.getItem('categorys'));
		categorys.push(newCategory);
		localStorage.setItem('categorys',JSON.stringify(categorys));
	}
}