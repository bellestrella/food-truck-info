import { Component } from '@angular/core';

/** Create the interface for a foodTruck object.
 * Declare all of its attributes
 */
interface foodTrucks{
    id: Number;
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
}
