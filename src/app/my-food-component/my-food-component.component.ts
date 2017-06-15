import { Component, OnInit } from '@angular/core';
import {Food} from "../models/food";
import {FoodService} from '../services/food.service';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-my-food-component',
  templateUrl: './my-food-component.component.html',
  styleUrls: ['./my-food-component.component.css'],
  providers:[FoodService,CategoryService]
})
export class MyFoodComponent implements OnInit {
	public title:string;
	public categorys:any[];
	public foods:Food;
  constructor(private _FoodService:FoodService,private _CategoryService:CategoryService) 
  { 
  	this.title="Platillos"
  	this.foods=this._FoodService.getFoods();
    this.categorys=this._CategoryService.getCategorys();
  }

  ngOnInit() {
  	
  }

  OnDelete(id){
    this._FoodService.deleteFood(id);
    this.foods=this._FoodService.getFoods();
  }

}