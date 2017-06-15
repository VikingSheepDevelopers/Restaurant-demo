import {Injectable} from '@angular/core';
import {Init} from '../init-food';

@Injectable()
export class FoodService extends Init{
	constructor(){
		super();
		console.log('platillo iniciado...');
		this.load();
	}

	getFoods(){
		var foods=JSON.parse(localStorage.getItem('foods'));
		return foods;
	}

	addFood(newFood){
		var foods=JSON.parse(localStorage.getItem('foods'));
		foods.push(newFood);
		localStorage.setItem('foods',JSON.stringify(foods));
	}

	deleteFood(id){
		var foods=JSON.parse(localStorage.getItem('foods'));
		for(var f in foods){
			if(foods[f].id==id){
				foods.splice(f,1);
			}
		}
		localStorage.setItem('foods',JSON.stringify(foods));
	}

	viewFood(id){
		var myfood;
		var foods=JSON.parse(localStorage.getItem('foods'));
		for(var f of foods){
			if(f.id==id){
				myfood=f;
			}
		}
		return myfood;
	}

	/*editFood(changeFood){
		var compositeIngredients=JSON.parse(localStorage.getItem('compositeIngredients'));
		for(var ci of compositeIngredients){
			if(ci.id==changeFood.id){
				ci.name=changeFood.name;
				ci.price_x_kg=changeFood.ingredients;
				ci.existence=changeFood.category_id;
			}
		}
		localStorage.setItem('compositeIngredients',JSON.stringify(compositeIngredients));
	}*/
}