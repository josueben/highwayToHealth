import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TracingPage } from './tracing';

@NgModule({
  declarations: [
    TracingPage,
  ],
  imports: [
    IonicPageModule.forChild(TracingPage),
  ],
})
export class TracingPageModule {}
