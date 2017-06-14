import {Injectable} from '@angular/core';
import {Init} from '../init-ingredient_x_composite';

@Injectable()
export class IngredientXCompositeService extends Init{
	constructor(){
		super();
		console.log('iniciado...');
		this.load();
	}

	getIngredientXComposite(){
		var ingredient_x_composites=JSON.parse(localStorage.getItem('ingredient_x_composites'));
		return ingredient_x_composites;
	}

	addIngredientXComposite(newIC){
		var ingredient_x_composites=JSON.parse(localStorage.getItem('ingredient_x_composites'));
		ingredient_x_composites.push(newIC);
		localStorage.setItem('ingredient_x_composites',JSON.stringify(ingredient_x_composites));
	}

	deleteIngredientXComposite(id){
		var ingredient_x_composites=JSON.parse(localStorage.getItem('ingredient_x_composites'));
		for(var ic in ingredient_x_composites){
			if(ingredient_x_composites[ic].id==id){
				ingredient_x_composites.splice(ic,1);
			}
		}
		localStorage.setItem('ingredient_x_composites',JSON.stringify(ingredient_x_composites));
	}
}