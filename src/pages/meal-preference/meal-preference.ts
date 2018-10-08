import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the MealPreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meal-preference',
  templateUrl: 'meal-preference.html',
})
export class MealPreferencePage {
  setMealPreference: FormGroup;
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.setMealPreference = this.formBuilder.group({
      breakfast: ['', Validators.required],
      meal1: ['', ],
      lunch: ['', Validators.required],
      meal2: ['', ],
      dinner: ['', Validators.required]
    });
  }

  get f() { return this.setMealPreference.controls; }

  mealPreference() {
    this.submitted = true;
    console.log(this.f);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPreferencePage');
  }

}
