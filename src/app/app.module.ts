import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodtruckComponent } from './foodtruck/foodtruck.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodtruckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule 
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
