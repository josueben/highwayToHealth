import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';

/**
 * Generated class for the UserFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
})
export class UserFormPage implements OnInit {
  createUserForm: FormGroup;
  submitted = false;
  items = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder
    ) {

      this.createUserForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required, Validators.pattern('[0-9]+')]],
        weight: ['', [Validators.required, Validators.minLength(2)]],
        height: ['', [Validators.required, Validators.minLength(2)]],
        activity: ['', Validators.required]
      });

      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
  }

  ngOnInit() {
    
  }

  get f() { return this.createUserForm.controls; }

  createUser() {
    this.submitted = true;
    console.log(this.f);
    // stop here if form is invalid
    if (this.createUserForm.invalid) {
      return;
    }
  }

  /*doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }*/

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  goToLogIn() {
    this.navCtrl.push(LogInPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormPage');
  }

}
