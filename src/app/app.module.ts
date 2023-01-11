import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallComponent } from './viewall/viewall.component';
import {HttpClientModule} from '@angular/common/http'


const appRoutes:Routes=[
  {
    path:"",component:ViewallComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
