import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressRingModule } from 'projects/progress-ring/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressRingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
