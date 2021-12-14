import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly components = ['Combo Box', 'Line Chart', 'Player'];

  current = this.components[0];

  readonly items = [
    'John Cleese',
    'Eric Idle',
    'Michael Palin',
    'Terry Gilliam',
    'Terry Jones',
    'Graham Chapman',
  ];

  value = '';

  x = 200;

  width = 400;

  smoothing = 0;

  readonly lineChart: readonly [number, number][] = [
    [0, 60],
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
    [400, 110],
    [450, 40],
    [500, 50],
    [550, 80],
    [600, 130],
    [650, 120],
    [700, 140],
    [750, 100],
    [800, 90],
  ];
}
