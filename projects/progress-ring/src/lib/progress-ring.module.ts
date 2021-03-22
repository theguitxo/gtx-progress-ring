import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressRingComponent } from './progress-ring.component';

@NgModule({
  declarations: [ProgressRingComponent],
  imports: [
    CommonModule,
  ],
  exports: [ProgressRingComponent]
})
export class ProgressRingModule { }
