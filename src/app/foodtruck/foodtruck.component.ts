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
import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../foodtruck';


@Component({
  selector: 'app-foodtruck',
  templateUrl: './foodtruck.component.html',
  styleUrls: ['./foodtruck.component.css']
})


export class FoodtruckComponent implements OnInit {

  food: Foodtruck = {
    name: 'Valentinas Tex Mex BBQ',
    phone: '+15122214248'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

