import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodPreference } from '../../app/classes/FoodPreference';

/**
 * Generated class for the FoodPreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-preferences',
  templateUrl: 'food-preferences.html',
})
export class FoodPreferencesPage {
  setFoodPreferences: FormGroup;
  submitted = false;
  foods: FoodPreference[] = [];
  itemsColumnA: FoodPreference[] = [];
  itemsColumnB: FoodPreference[] = [];
  itemsColumnC: FoodPreference[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.setFoodPreferences = this.formBuilder.group({
    });
    for (let i = 0; i < 5; i++) {
      this.itemsColumnA.push(new FoodPreference(i + 3, 'Arroz' + i));
    }
    for (let i = 0; i < 5; i++) {
      this.itemsColumnB.push(new FoodPreference(i + 10, 'Frijol' + i));
    }
    for (let i = 0; i < 5; i++) {
      this.itemsColumnC.push(new FoodPreference(i + 20, 'Pescado' + i));
    }
  }

  setFood() {
    this.submitted = true;
    let item;
    for (item of this.itemsColumnA) {
      const element = document.getElementById(item.id.toString());
      /*if (element.checked) {
        this.foods.push(new FoodPreference(item.id, item.name));
      }*/
    }
    console.log(this.foods);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPreferencesPage');
  }

}
