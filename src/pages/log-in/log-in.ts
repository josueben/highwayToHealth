import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserFormPage } from '../user-form/user-form';
import { FoodPreferencesPage } from '../food-preferences/food-preferences';
import { HomePage } from '../home/home';
import { MealPreferencePage } from '../meal-preference/meal-preference';
//import { TracingPage } from '../tracing/tracing';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage implements OnInit {

  logInForm: FormGroup;
  submitted = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder
    ) {
      this.logInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  ngOnInit() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  get f() { return this.logInForm.controls; }

  checkUser() {
    this.submitted = true;
    console.log(this.f);
    this.navCtrl.push(UserFormPage);
    // stop here if form is invalid
    if (this.logInForm.invalid) {
      console.log("Invalido");
      return;
    }
  }

  aux(){
    this.navCtrl.push(UserFormPage);
  }

  createAccount(){
    this.navCtrl.push(UserFormPage);
  }

}
