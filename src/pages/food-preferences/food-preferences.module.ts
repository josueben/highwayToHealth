import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodPreferencesPage } from './food-preferences';

@NgModule({
  declarations: [
    FoodPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodPreferencesPage),
  ],
})
export class FoodPreferencesPageModule {}
