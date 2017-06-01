import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyCustomerComponent} from './my-customer-component/my-customer-component.component';
import {MyCustomerAddComponent} from './my-customer-add/my-customer-add.component';
import {MyCustomerEditComponent} from './my-customer-edit/my-customer-edit.component';
import {MyUserComponent} from './my-user-component/my-user-component.component';
import {MyUserAddComponent} from './my-user-add/my-user-add.component';
import {MyUserEditComponent} from './my-user-edit/my-user-edit.component';

const appRoutes: Routes=[
	{path:'',component:MyCustomerComponent},
	{path:'customerCreate',component:MyCustomerAddComponent},
	{path:'customerEdit/:id',component:MyCustomerEditComponent},
	{path:'listUsers',component:MyUserComponent},
	{path:'userCreate',component:MyUserAddComponent},
	{path:'userEdit/:id',component:MyUserEditComponent},
	{path:'**',component:MyCustomerComponent}
	
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);