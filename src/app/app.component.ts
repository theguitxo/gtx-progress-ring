import { Component } from '@angular/core';
import { dirOptions } from 'projects/progress-ring/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get rightDirection(): dirOptions {
    return dirOptions.RIGHT;
  }

  get leftDirection(): dirOptions {
    return dirOptions.LEFT;
  }
  // examples: Array<progressRingOptions> = [
  //   {
  //     size: 180,
  //     strokeWidth: 10,
  //     backColor: 'gray',
  //     frontColor: 'cyan',
  //     percent: 33,
  //     direction: dirOptions.RIGHT,
  //     useAnimation: true,
  //   },
  //   {
  //     strokeWidth: 5,
  //     percent: 65,
  //     showPercentText: true,
  //   }
  // ];
}
