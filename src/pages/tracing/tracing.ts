import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tracing } from '../../app/classes/Tracing'
import { Diet } from '../../app/classes/Diet';

/**
 * Generated class for the TracingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracing',
  templateUrl: 'tracing.html',
})
export class TracingPage {
  tracings: Tracing[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const itemsQuant = 5;
    let iterator = 0;
    for (iterator; iterator < itemsQuant; iterator++) {
      const diet: Diet = new Diet('Bajar de peso', 1800, '25 de Mayo del 2018');
      this.tracings.push(new Tracing(1, 90 - iterator, diet.date, diet.calories));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracingPage');
  }

}
