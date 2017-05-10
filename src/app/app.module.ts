import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { MyCustomerComponent } from './my-customer-component/my-customer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
            prefix: 'my-restaurant',
            storageType: 'localStorage'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
