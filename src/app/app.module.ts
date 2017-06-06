import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule, Routes } from '@angular/router';



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
    MyIngredientEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    LocalStorageModule.withConfig({
            prefix: 'my-restaurant',
            storageType: 'localStorage'
        })
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
