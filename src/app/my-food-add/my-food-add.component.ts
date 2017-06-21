import { Component, OnInit } from '@angular/core';
import {Food} from "../models/food";
import {IngredientXComposite} from "../models/ingredientXComposite";
import {CompositeXFood} from "../models/compositeXFood";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CompositeIngredientService} from '../services/compositeIngredient.service';
import {IngredientService} from '../services/ingredient.service';
import {CategoryService} from '../services/category.service';
import {IngredientXCompositeService} from '../services/ingredient_x_composite.service';
import {FoodService} from '../services/food.service';
import {CompositeXFoodService} from '../services/composite_x_foods.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-my-food-add',
  templateUrl: './my-food-add.component.html',
  styleUrls: ['./my-food-add.component.css'],
  providers:[FoodService,CompositeXFoodService,CompositeIngredientService,IngredientService,CategoryService,IngredientXCompositeService]
})
export class MyFoodAddComponent implements OnInit {
  public title:string;
  public id:number;
  public food:Food;
  public foods:Array<{name: string,ingredient_x_composite:Array<Number>, composite_x_food: Array<Number>,category_id:number,price_f:number,price_v:number
  	image_name:string,descrip:string}>;
  public categorys:any[];
  public ingredients:any[];
  public ingredients2:any[];
  public composites:any[];
  public composites2:any[];
  public IngredientXComposite:IngredientXComposite;
  public CompositeXFood:CompositeXFood;
  public IngredientXComposites:Array<{ingredient_id: number,gramo:number}>;
  public ingredientXComposites:any[];
  public CompositeXFoods:Array<{composite_id: number,gramo:number}>;
  public compositeXFoods:any[];
  public idn:number;
  public n:number;
  public idm:number;
  public m:number;
  
  constructor(private _FoodService:FoodService,private _CompositeIngredientService:CompositeIngredientService,private _IngredientService:IngredientService,private _CategoryService:CategoryService,
    private _route:ActivatedRoute,private _router:Router,private _IngredientXCompositeService:IngredientXCompositeService,private _CompositeXFoodService:CompositeXFoodService) {
    this.foods=this._FoodService.getFoods();
    this.categorys=this._CategoryService.getCategorys();
    this.ingredients=this._IngredientService.getIngredients();
    this.IngredientXComposites=this._IngredientXCompositeService.getIngredientXComposite();
    this.composites=this._CompositeIngredientService.getCompositeIngredients();
    this.CompositeXFoods=this._CompositeXFoodService.getCompositeXFood();
   }

  ngOnInit() {
    this.id=this.foods.length+1;
    this.food=new Food(this.id,"",[],[],0,0,0,"","");
    this.idn=this.IngredientXComposites.length+1;
    this.n=this.idn;
    this.IngredientXComposite=new IngredientXComposite(this.n,0,0);
    this.ingredientXComposites=[];
    this.ingredients2=[];
    for (var i of this.ingredients) {
      this.ingredients2.push({id:i.id,name:i.name});
    }
    this.idm=this.CompositeXFoods.length+1;
    this.m=this.idm;
    this.CompositeXFood=new CompositeXFood(this.n,0,0);
    this.composites2=[];
    this.compositeXFoods=[];
    for (var i of this.composites) {
      this.composites2.push({id:i.id,name:i.name});
    }
  }

  public onSubmit(){
    for (var i of this.ingredientXComposites) {
      this.food.ingredient_x_composite.push(i.id);
    }
    for (var i of this.compositeXFoods) {
      this.food.composite_x_food.push(i.id);
    }
    console.log(this.food);
    this._FoodService.addFood(this.food);
    this._router.navigate(['/listFoods']);
  }

  public addIngredients() {
    this.n++;
    this._IngredientXCompositeService.addIngredientXComposite(this.IngredientXComposite);
    this.ingredientXComposites.push({id:this.n,ingredient_id:this.IngredientXComposite.ingredient_id,gramo:this.IngredientXComposite.gramo});
  }

  public addComposites() {
    this.m++;
    this._CompositeXFoodService.addCompositeXFood(this.CompositeXFood);
    this.compositeXFoods.push({id:this.m,composite_id:this.CompositeXFood.composite_id,gramo:this.CompositeXFood.gramo});
  }

  onChange(event) {
    var files = event.srcElement.files;
    this.food.img_name="assets/img/"+files[0].name;
    console.log(files[0].name);
  }

}
