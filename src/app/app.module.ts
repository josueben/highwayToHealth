import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DietPage } from '../pages/diet/diet';
import { FoodPreferencesPage } from '../pages/food-preferences/food-preferences';
import { LogInPage } from '../pages/log-in/log-in';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { MealPreferencePage } from '../pages/meal-preference/meal-preference';
import { TracingPage } from '../pages/tracing/tracing';
import { UserFormPage } from '../pages/user-form/user-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DietPage,
    FoodPreferencesPage,
    LogInPage,
    MainMenuPage,
    MealPreferencePage,
    TracingPage,
    UserFormPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DietPage,
    FoodPreferencesPage,
    LogInPage,
    MainMenuPage,
    MealPreferencePage,
    TracingPage,
    UserFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
