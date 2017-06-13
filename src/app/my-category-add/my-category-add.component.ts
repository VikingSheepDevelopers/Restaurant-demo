import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CategoryService} from '../services/category.service';
@Component({
  selector: 'app-my-category-add',
  templateUrl: './my-category-add.component.html',
  styleUrls: ['./my-category-add.component.css'],
  providers:[CategoryService]
})
export class MyCategoryAddComponent implements OnInit {
	public title:string;
	public id:number;
	public category:Category;
	public categorys:Array<{name: string}>;
  
  constructor(private _categoryService:CategoryService,private _route:ActivatedRoute,private _router:Router) {
    this.categorys=this._categoryService.getCategorys();
   }

  ngOnInit() {
    this.id=this.categorys.length+1;
  	this.category=new Category(this.id,"");
  	console.log(this.categorys);
  }

  public onSubmit(){
  	console.log(this.category);
    this._categoryService.addCategory(this.category);
    this._router.navigate(['/listCategory']);
  }
  

}
