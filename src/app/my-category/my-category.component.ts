import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CategoryService} from '../services/category.service';
@Component({
  selector: 'app-my-category',
  templateUrl: './my-category.component.html',
  styleUrls: ['./my-category.component.css'],
  providers:[CategoryService]
})
export class MyCategoryComponent implements OnInit {
	public title:string;
	public categorys:Category;
	constructor(private _CategoryService:CategoryService) 
	{ 
		this.title="Categorias"
		this.categorys=this._CategoryService.getCategorys();
	}

	ngOnInit() {
		
	}

	OnDelete(id){
		this._CategoryService.deleteCategory(id);
		this.categorys=this._CategoryService.getCategorys();
	}

}
