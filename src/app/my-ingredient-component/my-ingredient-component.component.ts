import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/ingredient";
import {IngredientService} from '../services/ingredient.service';
@Component({
  selector: 'app-my-ingredient',
  templateUrl: './my-ingredient-component.component.html',
  styleUrls: ['./my-ingredient-component.component.css'],
  providers:[IngredientService]
})
export class MyIngredientComponent implements OnInit {
public title:string;
public ingredients:Ingredient;
  constructor(private _ingredientService:IngredientService) 
  { 
  	this.title="Ingredientes es Inventario"
  	this.ingredients=this._ingredientService.getIngredients();
  }

  ngOnInit() {
  	
  }

  OnDelete(id){
    this._ingredientService.deleteIngredient(id);
    this.ingredients=this._ingredientService.getIngredients();
  }

}
