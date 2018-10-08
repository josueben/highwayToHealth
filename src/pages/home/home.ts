import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TracingPage } from '../tracing/tracing';
import { FoodPreferencesPage } from '../food-preferences/food-preferences';
import { MealPreferencePage } from '../meal-preference/meal-preference';
import { DietPage } from '../diet/diet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTracing() {
    this.navCtrl.push(TracingPage);
  }

  goToFood() {
    this.navCtrl.push(FoodPreferencesPage);
  }

  goToMeals() {
    this.navCtrl.push(MealPreferencePage);
  }

  goToDiet() {
    this.navCtrl.push(DietPage);
  }

}
