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

@NgModule({
  declarations: [
    AppComponent,
    MyCustomerComponent,
    MyCustomerAddComponent,
    MyCustomerEditComponent,
    NavbarComponent,
    MyUserComponent
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
