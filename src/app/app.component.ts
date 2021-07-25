import { Component } from '@angular/core';
import allFoodData from './allfood.json';

/** Create the interface for a foodTruck object.
 * Declare all of its attributes
 */
interface foodTrucks{
    name: String;
    display_phone: String;
    address: String;
    rating: Number;
    price: String;
    type: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Food Truck Finder';

  /** Here, we create an array of Foodtrucks
   * that is called "allTrucks". The data that
   * is passed is the allfood.json file that
   * is renamed "allFoodData"
   */
  allTrucks: foodTrucks[] = allFoodData;
}
