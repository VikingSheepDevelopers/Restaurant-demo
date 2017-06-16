import {Injectable} from '@angular/core';
import {Init} from '../init-composite_x_food';

@Injectable()
export class CompositeXFoodService extends Init{
	constructor(){
		super();
		console.log('iniciado...');
		this.load();
	}

	getCompositeXFood(){
		var composite_x_foods=JSON.parse(localStorage.getItem('composite_x_foods'));
		return composite_x_foods;
	}

	addCompositeXFood(newIC){
		var composite_x_foods=JSON.parse(localStorage.getItem('composite_x_foods'));
		composite_x_foods.push(newIC);
		localStorage.setItem('composite_x_foods',JSON.stringify(composite_x_foods));
	}

	deleteCompositeXFood(id){
		var composite_x_foods=JSON.parse(localStorage.getItem('composite_x_foods'));
		for(var ic in composite_x_foods){
			if(composite_x_foods[ic].id==id){
				composite_x_foods.splice(ic,1);
			}
		}
		localStorage.setItem('composite_x_foods',JSON.stringify(composite_x_foods));
	}
}