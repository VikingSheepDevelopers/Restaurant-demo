import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CompositeIngredient} from "../models/compositeIngredient";
import {IngredientXComposite} from "../models/ingredientXComposite";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CompositeIngredientService} from '../services/compositeIngredient.service';
import {IngredientService} from '../services/ingredient.service';
import {CategoryService} from '../services/category.service';
import {IngredientXCompositeService} from '../services/ingredient_x_composite.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-my-composite-ingredient-add',
  templateUrl: './my-composite-ingredient-add.component.html',
  styleUrls: ['./my-composite-ingredient-add.component.css'],
  providers:[CompositeIngredientService,IngredientService,CategoryService,IngredientXCompositeService]
})
export class MyCompositeIngredientAddComponent implements OnInit {
  public title:string;
  public id:number;
  public compositeIngredient:CompositeIngredient;
  public compositeIngredients:Array<{name: string,ingredients:Array<Number>, category_id: number}>;
  public categorys:any[];
  public ingredients:any[];
  public ingredients2:any[];
  public IngredientXComposite:IngredientXComposite;
  public IngredientXComposites:Array<{ingredient_id: number,gramo:number}>;
  public ingredientXComposites:any[];
  public idn:number;
  public n:number;
  
  constructor(private _CompositeIngredientService:CompositeIngredientService,private _IngredientService:IngredientService,private _CategoryService:CategoryService,
    private _route:ActivatedRoute,private _router:Router,private _IngredientXCompositeService:IngredientXCompositeService) {
    this.compositeIngredients=this._CompositeIngredientService.getCompositeIngredients();
    this.ingredients=this._IngredientService.getIngredients();
    this.categorys=this._CategoryService.getCategorys();
    this.IngredientXComposites=this._IngredientXCompositeService.getIngredientXComposite();
   }

  ngOnInit() {
    this.id=this.compositeIngredients.length+1;
    this.idn=this.IngredientXComposites.length+1;
    this.n=this.idn;
    this.IngredientXComposite=new IngredientXComposite(this.n,0,0);
    this.compositeIngredient=new CompositeIngredient(this.id,"",[],0);
    this.ingredients2=[];
    this.ingredientXComposites=[];
    for (var i of this.ingredients) {
      this.ingredients2.push({id:i.id,name:i.name});
    }
    console.log(this.ingredients2);
    
  }

  ngAfterViewInit() {
    $('.select2').select2();
  }

  public onSubmit(){
    for (var i of this.ingredientXComposites) {
      this.compositeIngredient.ingredient_x_composite.push(i.id);
    }
    console.log(this.compositeIngredient);
    this._CompositeIngredientService.addCompositeIngredient(this.compositeIngredient);
    this._router.navigate(['/listCompositeIngredients']);
  }

  public add() {
    this.n++;
    this._IngredientXCompositeService.addIngredientXComposite(this.IngredientXComposite);
    this.ingredientXComposites.push({id:this.n,ingredient_id:this.IngredientXComposite.ingredient_id,gramo:this.IngredientXComposite.gramo});
  }

}
