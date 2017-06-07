import {Injectable} from '@angular/core';
import {Init} from '../init-compositeIngredient';

@Injectable()
export class CompositeIngredientService extends Init{
	constructor(){
		super();
		console.log('compositeIngredient iniciado...');
		this.load();
	}

	getCompositeIngredients(){
		var compositeIngredients=JSON.parse(localStorage.getItem('compositeIngredients'));
		return compositeIngredients;
	}

	addCompositeIngredient(newCompositeIngredient){
		var compositeIngredients=JSON.parse(localStorage.getItem('compositeIngredients'));
		compositeIngredients.push(newCompositeIngredient);
		localStorage.setItem('compositeIngredients',JSON.stringify(compositeIngredients));
	}

	deleteCompositeIngredient(id){
		var compositeIngredients=JSON.parse(localStorage.getItem('compositeIngredients'));
		for(var ci in compositeIngredients){
			if(compositeIngredients[ci].id==id){
				compositeIngredients.splice(ci,1);
			}
		}
		localStorage.setItem('compositeIngredients',JSON.stringify(compositeIngredients));
	}

	viewCompositeIngredient(id){
		var mycompositeIngredients;
		var compositeIngredients=JSON.parse(localStorage.getItem('compositeIngredients'));
		for(var ci of compositeIngredients){
			if(ci.id==id){
				mycompositeIngredients=ci;
			}
		}
		return mycompositeIngredients;
	}

	editCompositeIngredient(changeCompositeIngredient){
		var compositeIngredients=JSON.parse(localStorage.getItem('compositeIngredients'));
		for(var ci of compositeIngredients){
			if(ci.id==changeCompositeIngredient.id){
				ci.name=changeCompositeIngredient.name;
				ci.price_x_kg=changeCompositeIngredient.ingredients;
				ci.existence=changeCompositeIngredient.cattegory_id;
			}
		}
		localStorage.setItem('compositeIngredients',JSON.stringify(compositeIngredients));
	}
}