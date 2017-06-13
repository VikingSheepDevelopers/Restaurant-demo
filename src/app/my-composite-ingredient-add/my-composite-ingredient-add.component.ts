import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CompositeIngredient} from "../models/compositeIngredient";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CompositeIngredientService} from '../services/compositeIngredient.service';
import {IngredientService} from '../services/ingredient.service';
import {CategoryService} from '../services/category.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-my-composite-ingredient-add',
  templateUrl: './my-composite-ingredient-add.component.html',
  styleUrls: ['./my-composite-ingredient-add.component.css'],
  providers:[CompositeIngredientService,IngredientService,CategoryService]
})
export class MyCompositeIngredientAddComponent implements OnInit {
  public title:string;
  public id:number;
  public compositeIngredient:CompositeIngredient;
  public compositeIngredients:Array<{name: string,ingredients:Array<Number>, category_id: number}>;
  public categorys:any[];
  public ingredients:any[];
  public ingredients2:any[];
  
  constructor(private _CompositeIngredientService:CompositeIngredientService,private _IngredientService:IngredientService,private _CategoryService:CategoryService,private _route:ActivatedRoute,private _router:Router) {
    this.compositeIngredients=this._CompositeIngredientService.getCompositeIngredients();
    this.ingredients=this._IngredientService.getIngredients();
    this.categorys=this._CategoryService.getCategorys();
   }

  ngOnInit() {
    this.id=this.compositeIngredients.length+1;
    this.compositeIngredient=new CompositeIngredient(this.id,"",[],0);
    this.ingredients2=[];

    for (var i of this.ingredients) {
      this.ingredients2.push({id:i.id,name:i.name});
    }
    console.log(this.ingredients2);
  }

  ngAfterViewInit() {
    $('.select2').select2();
  }

  public onSubmit(){
    console.log(this.compositeIngredient);
    this._CompositeIngredientService.addCompositeIngredient(this.compositeIngredient);
    this._router.navigate(['/listCompositeIngredients']);
  }

}
