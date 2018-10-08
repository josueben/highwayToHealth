import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealPreferencePage } from './meal-preference';

@NgModule({
  declarations: [
    MealPreferencePage,
  ],
  imports: [
    IonicPageModule.forChild(MealPreferencePage),
  ],
})
export class MealPreferencePageModule {}
