import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

function isValidColor(color: string): boolean {
  const element: HTMLElement = document.createElement('div');
  element.style.fill = color;
  return (element.style.fill !== '');
}

export enum dirOptions {
  RIGHT = 'right',
  LEFT = 'left',
}

@Component({
  selector: 'gtx-progress-ring',
  template: `
  <div class="wrapper"
    [style.width]="sizePixels" [style.height]="sizePixels">
    <div class="ring"
      [style.width]="sizePixels" [style.height]="sizePixels">
      <svg
        [style.width]="sizePixels" [style.height]="sizePixels">
        <circle
          [attr.cx]="circleCordsPosition" [attr.cy]="circleCordsPosition"
          [attr.r]="circleRadius"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-width]="strokeWidth"
          [attr.stroke]="backColor"></circle>
        <circle
          [ngClass]="{'percentCircle': useAnimation}"
          [attr.cx]="circleCordsPosition" [attr.cy]="circleCordsPosition"
          [attr.r]="circleRadius"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="dashoffset"
          [attr.stroke-width]="strokeWidth"
          [attr.stroke]="frontColor"></circle>
      </svg>
    </div>
    <div *ngIf="showPercentText" class="percentText">
      <div>
        <span [style.color]="_frontColor" [style.font-size]="percentNumberFontSize">{{ this._percent }}</span>
        <span [style.color]="_backColor" [style.font-size]="percentSymbolFontSize">%</span>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
      .wrapper {
        position: relative;
        box-sizing: border-box;
      }

      .ring, svg, circle {
        position: absolute;
        top: 0;
        left: 0;
      }

      .ring > svg {
        transform: rotate(-90deg);
      }

      circle {
        fill: none;
        stroke-linecap: round;
      }

      .percentCircle {
        transition: all 1.5s linear;
      }

      .percentText {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial;
        font-weight: bold;
      }

      .percentText span:first-child {
        margin-left: 8px;
        margin-right: 4px;
      }
    `
  ],
})
export class ProgressRingComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('size') size = 200;
  @Input('strokeWidth') strokeWidth = 10;
  @Input('backColor') set backColor(value: string) {
    if (isValidColor(value)) {
      this._backColor = value;
    }
  }
  @Input('frontColor') set frontColor(value: string) {
    if (isValidColor(value)) {
      this._frontColor = value;
    }
  }
  @Input('percent') set percent(value: number) {
    if (value < 0) {
      this._percent = 0;
    } else if (value > 100) {
      this._percent = 100;
    } else {
      this._percent = value;
    }
  }
  @Input('direction') direction: dirOptions;
  @Input('showPercentText') showPercentText: boolean;
  @Input('useAnimation') useAnimation: boolean;

  private _backColor: string = '#C2C2C2';
  private _frontColor: string = '#99B2FF';
  private _percent: number = 100;
  private _dashoffset: number;

  constructor() { }

  ngOnInit() {
    this._dashoffset = this.circumference;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._dashoffset = this.percentCircumference;
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.percent && !changes.percent.firstChange) {
      this._dashoffset = this.percentCircumference;
    }
  }

  get frontColor(): string {
    return this._frontColor;
  }

  get backColor(): string {
    return this._backColor;
  }

  get dashoffset(): number {
    const directionMultiplicator = this.direction === dirOptions.LEFT ? -1 : 1;
    return this._dashoffset * directionMultiplicator;
  }

  get sizePixels(): string {
    return `${this.size}px`;
  }

  get circleCordsPosition() {
    return (this.size / 2);
  }

  get circleRadius() {
    return (this.size / 2) - (this.strokeWidth / 2);
  }

  get circumference() {
    return (this.size - this.strokeWidth) * Math.PI;
  }

  get percentCircumference() {
    return this.circumference - (this.circumference * this._percent / 100);
  }

  get percentNumberFontSize() {
    return `${Math.round(this.circleRadius * .50)}px`;
  }

  get percentSymbolFontSize() {
    return `${Math.round(this.circleRadius * .25)}px`;
  }
}
