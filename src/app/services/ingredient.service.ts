import {Injectable} from '@angular/core';
import {Init} from '../init-ingredient';

@Injectable()
export class IngredientService extends Init{
	constructor(){
		super();
		console.log('IngredientService iniciado...');
		this.load();
	}

	getIngredients(){
		var ingredients=JSON.parse(localStorage.getItem('ingredients'));
		return ingredients;
	}

	addIngredient(newIngredient){
		var ingredients=JSON.parse(localStorage.getItem('ingredients'));
		ingredients.push(newIngredient);
		localStorage.setItem('ingredients',JSON.stringify(ingredients));
	}

	deleteIngredient(id){
		var ingredients=JSON.parse(localStorage.getItem('ingredients'));
		for(var ingredient in ingredients){
			if(ingredients[ingredient].id==id){
				ingredients.splice(ingredient,1);
			}
		}
		localStorage.setItem('ingredients',JSON.stringify(ingredients));
	}

	viewIngredient(id){
		var myingredient;
		var ingredients=JSON.parse(localStorage.getItem('ingredients'));
		for(var ingredient of ingredients){
			if(ingredient.id==id){
				myingredient=ingredient;
			}
		}
		return myingredient;
	}

	editIngredient(changeIngredient){
		var ingredients=JSON.parse(localStorage.getItem('ingredients'));
		for(var ingredient of ingredients){
			if(ingredient.id==changeIngredient.id){
				ingredient.name=changeIngredient.name;
				ingredient.price_x_kg=changeIngredient.price_x_kg;
				ingredient.existence=changeIngredient.existence;
			}
		}
		localStorage.setItem('ingredients',JSON.stringify(ingredients));
	}
}