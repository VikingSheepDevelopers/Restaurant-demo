import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyCustomerComponent} from './my-customer-component/my-customer-component.component';
import {MyCustomerAddComponent} from './my-customer-add/my-customer-add.component';

const appRoutes: Routes=[
	{path:'',component:MyCustomerComponent},
	{path:'customerCreate',component:MyCustomerAddComponent},
	{path:'**',component:MyCustomerComponent}
	
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);