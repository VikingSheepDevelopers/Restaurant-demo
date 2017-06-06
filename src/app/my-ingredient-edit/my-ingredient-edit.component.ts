import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {IngredientService} from '../services/ingredient.service';
@Component({
  selector: 'app-my-ingredient-edit',
  templateUrl: './my-ingredient-edit.component.html',
  styleUrls: ['./my-ingredient-edit.component.css'],
  providers:[IngredientService]
})
export class MyIngredientEditComponent implements OnInit {
	public title:string;
	public id:number;
 	public ingredient:Ingredient;
  	public ingredients:Array<{id:number,name: string,price_x_kg:number, existence: number}>;
  
    constructor(private _ingredientService:IngredientService,private _route:ActivatedRoute,private _router:Router) 
    {
    	this.ingredients=this._ingredientService.getIngredients();
    }

    ngOnInit() 
	{
	  	this.getIngredients();
	  	console.log(this.ingredient);
	}

	getIngredients()
	{
		this._route.params.forEach((params:Params)=>{
			let id=params['id'];
			this.ingredient=this._ingredientService.viewIngredient(id);
		});
	}

	public onSubmit()
	{	
	    this._ingredientService.editIngredient(this.ingredient);
	    this._router.navigate(['/listIngredients']);
	}

}
