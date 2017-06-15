import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { Select2Module } from 'ng2-select2';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';



import { AppComponent } from './app.component';
import { MyCustomerComponent } from './my-customer-component/my-customer-component.component';
import { MyCustomerAddComponent } from './my-customer-add/my-customer-add.component';
import { MyCustomerEditComponent } from './my-customer-edit/my-customer-edit.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MyUserComponent } from './my-user-component/my-user-component.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MyUserAddComponent } from './my-user-add/my-user-add.component';
import { MyUserEditComponent } from './my-user-edit/my-user-edit.component';
import { MyIngredientComponent } from './my-ingredient-component/my-ingredient-component.component';
import { MyIngredientAddComponent } from './my-ingredient-add/my-ingredient-add.component';
import { MyIngredientEditComponent } from './my-ingredient-edit/my-ingredient-edit.component';
import { MyCategoryComponent } from './my-category/my-category.component';
import { MyCompositeIngredientComponent } from './my-composite-ingredient-component/my-composite-ingredient-component.component';
import { MyCategoryAddComponent } from './my-category-add/my-category-add.component';
import { MyCompositeIngredientAddComponent } from './my-composite-ingredient-add/my-composite-ingredient-add.component';
import { MyFoodComponent } from './my-food-component/my-food-component.component';
import { MyIngredientXCompositeAddComponent } from './my-ingredient-x-composite-add/my-ingredient-x-composite-add.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCustomerComponent,
    MyCustomerAddComponent,
    MyCustomerEditComponent,
    NavbarComponent,
    MyUserComponent,
    SidebarComponent,
    MyUserAddComponent,
    MyUserEditComponent,
    MyIngredientComponent,
    MyIngredientAddComponent,
    MyIngredientEditComponent,
    MyCategoryComponent,
    MyCompositeIngredientComponent,
    MyCategoryAddComponent,
    MyCompositeIngredientAddComponent,
    MyFoodComponent,
    MyIngredientXCompositeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing,
    Select2Module,
    LocalStorageModule.withConfig({
            prefix: 'my-restaurant',
            storageType: 'localStorage'
        })
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
