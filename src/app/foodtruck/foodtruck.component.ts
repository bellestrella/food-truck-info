/** Using the CLI, we have generated a new component named
 * 'foodtruck'. With it, it created the foodtruck folder along
 * with three files and a test a file.
 * 
 * This file is the class file.
 * 
 * You always import the component symbol from the Angular core library and annotate
 * the component class with the component decorator. It specifies the
 * Angular metadata for the component. The three metadata properties can
 * be found inside the component:
 * selector - components CSS element selector
 * templateUrl - location of the components template file
 * styleUrls - location of the components private CSS style
 * 
 * ngOnInit is a lifecycle hook. It is a good place
 * to put initialization logic
 * 
 * Always export the class so you can import it where need be
 */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../foodtruck';

// Changes. //
export class FoodTruck {
  constructor(
    public name: String,
    public display_phone: String,
    public address: String,
    public rating: Number,
    public price: String,
    public type: String,
  ) {
  }
}
// Changes //


@Component({
  selector: 'app-foodtruck',
  templateUrl: './foodtruck.component.html',
  styleUrls: ['./foodtruck.component.css']
})


export class FoodtruckComponent implements OnInit {

  //Changes//
  listOfFoodTrucks: FoodTruck[] = [];
  //Changes//

  //Changes - added parameter so delete just in case later//
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //debugging
    console.log('hello!');
    //for getFoodtrucks() to run, you must call it here.
    this.getFoodtrucks();
  }

  // Changes - Adding this method //
  getFoodtrucks(){
    console.log('Inside of the getFoodTrucks() method...');
    this.httpClient.get<any>('http://localhost:3000/restaurants').subscribe(
      response => {
      console.log(response);
      this.listOfFoodTrucks = response;
    }
    );
  }
}
