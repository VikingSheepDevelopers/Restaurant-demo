import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {IngredientService} from '../services/ingredient.service';
@Component({
  selector: 'app-my-ingredient-add',
  templateUrl: './my-ingredient-add.component.html',
  styleUrls: ['./my-ingredient-add.component.css'],
  providers:[IngredientService]
})
export class MyIngredientAddComponent implements OnInit {
	public title:string;
	public id:number;
	public ingredient:Ingredient;
	public ingredients:Array<{name: string,price_x_kg:number, existence: number}>;
  
  constructor(private _ingredientService:IngredientService,private _route:ActivatedRoute,private _router:Router) {
    this.ingredients=this._ingredientService.getIngredients();
   }

  ngOnInit() {
    this.id=this.ingredients.length+1;
  	this.ingredient=new Ingredient(this.id,"",0,0);
  	console.log(this.ingredient);
  }

  public onSubmit(){
    this._ingredientService.addIngredient(this.ingredient);
    this._router.navigate(['/listIngredients']);
  }

}
