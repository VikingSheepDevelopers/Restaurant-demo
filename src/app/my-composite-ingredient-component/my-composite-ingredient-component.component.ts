import { Component, OnInit } from '@angular/core';
import {CompositeIngredient} from "../models/compositeIngredient";
import {CompositeIngredientService} from '../services/compositeIngredient.service';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-my-composite-ingredient-component',
  templateUrl: './my-composite-ingredient-component.component.html',
  styleUrls: ['./my-composite-ingredient-component.component.css'],
  providers:[CompositeIngredientService,CategoryService]
})
export class MyCompositeIngredientComponent implements OnInit {
public title:string;
public categorys:any[];
public compositeIngredients:CompositeIngredient;
  constructor(private _CompositeIngredientService:CompositeIngredientService,private _CategoryService:CategoryService) 
  { 
  	this.title="Ingredientes compuestos en Inventario"
  	this.compositeIngredients=this._CompositeIngredientService.getCompositeIngredients();
    this.categorys=this._CategoryService.getCategorys();
  }

  ngOnInit() {
  	
  }

  OnDelete(id){
    this._CompositeIngredientService.deleteCompositeIngredient(id);
    this.compositeIngredients=this._CompositeIngredientService.getCompositeIngredients();
  }

}
