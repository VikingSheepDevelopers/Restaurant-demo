import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyCustomerComponent} from './my-customer-component/my-customer-component.component';
import {MyCustomerAddComponent} from './my-customer-add/my-customer-add.component';
import {MyCustomerEditComponent} from './my-customer-edit/my-customer-edit.component';
import {MyUserComponent} from './my-user-component/my-user-component.component';
import {MyUserAddComponent} from './my-user-add/my-user-add.component';
import {MyUserEditComponent} from './my-user-edit/my-user-edit.component';
import {MyIngredientComponent} from './my-ingredient-component/my-ingredient-component.component';
import {MyIngredientAddComponent} from './my-ingredient-add/my-ingredient-add.component';
import {MyIngredientEditComponent} from './my-ingredient-edit/my-ingredient-edit.component';
import {MyCompositeIngredientComponent} from './my-composite-ingredient-component/my-composite-ingredient-component.component';
import {MyCompositeIngredientAddComponent} from './my-composite-ingredient-add/my-composite-ingredient-add.component';
import {MyCategoryComponent} from './my-category/my-category.component';
import {MyCategoryAddComponent} from './my-category-add/my-category-add.component';
import {MyFoodComponent} from './my-food-component/my-food-component.component';


const appRoutes: Routes=[
	{path:'',component:MyCustomerComponent},
	{path:'customerCreate',component:MyCustomerAddComponent},
	{path:'customerEdit/:id',component:MyCustomerEditComponent},
	{path:'listUsers',component:MyUserComponent},
	{path:'userCreate',component:MyUserAddComponent},
	{path:'userEdit/:id',component:MyUserEditComponent},
	{path:'listIngredients',component:MyIngredientComponent},
	{path:'ingredientCreate',component:MyIngredientAddComponent},
	{path:'ingredientEdit/:id',component:MyIngredientEditComponent},
	{path:'listCompositeIngredients',component:MyCompositeIngredientComponent},
	{path:'compositeIngredientsCreate',component:MyCompositeIngredientAddComponent},
	{path:'listCategory',component:MyCategoryComponent},
	{path:'categoryCreate',component:MyCategoryAddComponent},
	{path:'listFoods',component:MyFoodComponent},
	{path:'assets/**',redirectTo:'assets/**'},
	{path:'**',component:MyCustomerComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);